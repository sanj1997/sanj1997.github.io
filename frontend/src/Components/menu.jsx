import { MenuButton,MenuList,MenuItem,IconButton,Menu } from "@chakra-ui/react";
import {GiHamburgerMenu,GiArtificialIntelligence} from "react-icons/gi"
import {GrProjects} from "react-icons/gr"
import {BiHomeCircle} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import {MdContactMail} from "react-icons/md"
import {ImStatsDots} from "react-icons/im"
import { Link } from 'react-scroll';
const MenuComp = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu/>}
        bg="#fce5d8"
        _active={{bg:"#fce5d8"}}
        _hover={{bg:"#fce5d8"}}
      />
      <MenuList  width={"100vw"} bg="#fce5d8">
      <Link activeClass="active" to="home" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><MenuItem _active={"none"} icon={<BiHomeCircle/>} >
          Home
        </MenuItem></Link>
        <Link activeClass="active" to="about" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><MenuItem icon={<CgProfile/>} >
          About
        </MenuItem></Link>
        <Link activeClass="active" to="skills" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><MenuItem icon={<GiArtificialIntelligence />} >Skills</MenuItem></Link>
        <Link activeClass="active" to="projects" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}> <MenuItem icon={<GrProjects/>} >
          Projects
        </MenuItem></Link>
        <Link activeClass="active" to="contacts" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><MenuItem icon={<ImStatsDots/>} >
          Statistics
        </MenuItem></Link>
        <Link activeClass="active" to="contacts" spy={true} offset={-50} smooth={true}  duration={700} cursor={'pointer'}><MenuItem icon={<MdContactMail/>} >
          Contact
        </MenuItem></Link>
      </MenuList>
    </Menu>
  );
};
export default MenuComp
