import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  //PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
  // https://docs.dndkit.com/api-documentation/sensors
  // Nếu dùng Pointer Sensor mặc định thì phải kết hợp CSS touch-action: none ở những phần tử kéo thả
  // nhưng mà còn bug
  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })

  // Nhấn giữ 250ms và dung sai của cảm ứng 500px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })

  // Ưu tiên sử dụng 2 loại sensors (mouse, touch) để có trải nghiệm trên mobile tốt nhất, ko bị bug
  // const sensors = useSensors(pointerSensor)
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])

  // Cung mot thoi diem chi co 1 phan tu dang dc keo (column hoac card)
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  // Trigger khi bat dau keo (drag) 1 phan tu
  const handleDragStart = (event) => {
    // console.log('HandleDrageStart: ', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD
      : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }

  // Trigger khi ket thuc hanh dong keo 1 phan tu => hanh dong tha (drop)
  const handleDragEnd = (event) => {
    // console.log('HandleDrageEnd: ', event)
    const { active, over } = event

    // Kiểm tra nếu ko tồn tại over (kéo linh tinh ra ngoài thì return luôn tránh lỗi)
    if (!over) return

    // Nếu vị trí sau khi kéo thả khác vị trí ban đầu
    if (active.id !== over.id) {
      // lay vi tri cu tu tk active
      const oldIndex = orderedColumns.findIndex(c => c._id === active.id)
      // lay vi tri moi tu tk over
      const newIndex = orderedColumns.findIndex(c => c._id === over.id)
      // console.log('orderedColumns: ', orderedColumns)
      // console.log('oldIndex: ', oldIndex)
      // console.log('newIndex: ', newIndex)

      // Dùng arrayMove của thằng dnd-kit để sắp xếp lại mảng Columns ban đầu
      // Code của arrayMove ở đây: dnd-kit/packages/sortable/src/utilities/arrayMove.ts
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)
      // console.log('dndOrderedColumns: ', dndOrderedColumns)
      // console.log('dndOrderedColumnsIds: ', dndOrderedColumnsIds)

      // Cập nhật lại state column ban đầu sau khi kéo thả
      setOrderedColumns(dndOrderedColumns)
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  // console.log('activeDragItemId: ', activeDragItemId)
  // console.log('activeDragItemType: ', activeDragItemType)
  // console.log('activeDragItemData: ', activeDragItemData)

  /**
   * Animation khi tha (Drop) phan tu - Test bang cach keo xong tha truc tiep va nhin phan giu cho Overlay
   */
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: '0.5' } } })
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Box
        sx={{
          bgcolor: theme =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns}/>
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) &&
           <Column column={activeDragItemData}/>}
          {(activeDragItemId && activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) &&
           <Card card={activeDragItemData}/>}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
