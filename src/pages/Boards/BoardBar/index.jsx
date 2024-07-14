import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        borderBottom: '1px solid #00bfa5',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Louis Nguyen Board"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
          <Tooltip title="LouisNguyen">
            <Avatar
              alt="Louis Nguyen"
              src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-1/344270874_905602180722480_3564515429452109506_n.jpg?stp=c1.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=fM1hwuDiXhsQ7kNvgGxRLCk&_nc_ht=scontent.fhan9-1.fna&oh=00_AYDjVx3lPSdSS3afdI3-qr5QYdYstmBarmp_lfrmcRYEtQ&oe=6697B9B6"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
