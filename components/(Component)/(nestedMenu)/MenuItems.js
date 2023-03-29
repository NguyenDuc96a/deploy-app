import { Fragment, useState } from "react";
import MuiMenu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Colors } from '../../../mui/theme';
import { hasChildren } from "../../../ultis/hasChildren";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";


const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <Link href={`${item.url}`} underline="hover" passhref="true">
      <ListItem>
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box >
      <ListItem component="a" onClick={handleClick}>
        {
          item.icon != undefined &&
          <ListItemIcon >{item.icon}</ListItemIcon>
        }
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit
      >
        <List component="div" disablePadding sx={{ pl: 4 }}>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

// const MultiLevel = ({ item }) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const { items: children } = item;

//   return (
//     <>
//       <Button
//         sx={{
//           color: Colors.secondary,
//         }}
//         aria-controls={open ? "fade-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//       // onMouseOver={handleClick}
//       >
//         {item.title}
//         {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//       </Button>
//       <MuiMenu
//         id="fade-menu"
//         MenuListProps={{
//           "aria-labelledby": "fade-button",
//           "disablePadding": true,
//           onMouseLeave: handleClose,
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <Collapse
//           in={open}
//           timeout="auto"
//           unmountOnExit
//           orientation="horizontal"
//           sx={{
//             backgroundColor: Colors.primary,
//             backgroundImage:
//               "linear-gradient(to right,#980d05,#71030c, #b20000,#71030c, #b20000)",
//           }}
//         >
//           {children.map((child, key) => (
//             <MenuItem key={key} item={child} />
//           ))}
//         </Collapse>
//       </MuiMenu>
//     </>
//   );
// };



export default MenuItem