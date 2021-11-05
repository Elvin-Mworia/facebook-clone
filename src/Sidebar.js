import React from 'react';
import './SidebarRow.css';
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';



function Sidebar() {
    return ( < div className = 'sidebar' >
        <
        SidebarRow src = "https://scontent.fnbo7-1.fna.fbcdn.net/v/t1.0-9/52100104_803450609990018_7292983480835637248_n.jpg?_nc_cat=100&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeH08kDhb7EpfZ-45qKcnmJ_rkNDT8hJZrKuQ0NPyElmsjT4ArkOVNH1jMi9PehmfVK82QiJ-V7DOwVBoG31Hti2&_nc_ohc=3g2je8XWKjgAX88m1iF&_nc_ht=scontent.fnbo7-1.fna&oh=f20e6de20510e98ef409f8895e3282fb&oe=6069C6A0"
        title = "Angerfist" / >

        <
        SidebarRow Icon = { LocalHospitalIcon }
        title = "Covid-19 Information Center" / >
        <
        SidebarRow Icon = { EmojiFlagsIcon }
        title = "Pages" / >
        <
        SidebarRow Icon = { PeopleIcon }
        title = "Friends" / >
        <
        SidebarRow Icon = { ChatIcon }
        title = "Messenger" / >
        <
        SidebarRow Icon = { StorefrontIcon }
        title = "Marketplace" / >
        <
        SidebarRow Icon = { VideoLibraryIcon }
        title = "Videos" / >
        <
        SidebarRow Icon = { ExpandMoreOutlined }
        title = "Marketplace" / >


        <
        /div>
    );
}

export default Sidebar;