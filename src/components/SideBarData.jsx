import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import WidgetsIcon from '@material-ui/icons/Widgets';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import BarChartIcon from '@material-ui/icons/BarChart';
import GroupIcon from '@material-ui/icons/Group';
import DashboardIcon from '@material-ui/icons/Dashboard';

export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/Home"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "MailBox",
        icon: <EmailIcon />,
        link: "/mailbox"
    },
    {
        title: "Widgets",
        icon: <WidgetsIcon />,
        link: "/widget"
    },
    {
        title: "Gallery",
        icon: <PhotoLibraryIcon />,
        link: "/gallery"
    },
    {
        title: "Users",
        icon: <GroupIcon />,
        link: "/users"
    },
    {
        title: "Graphs",
        icon: <BarChartIcon />,
        link: "/graphs"
    }


]
