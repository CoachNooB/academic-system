import {
    HomeRounded,
    PersonRounded,
    GroupRounded,
    AccountBoxRounded,
    MenuBookRounded,
    ScheduleRounded,
    GradeRounded,
    PowerSettingsNewRounded,
} from '@material-ui/icons'

export const MenuAdmin = [
    {
        title: 'Home',
        path: '/dashboard/admin/home',
        icon: <HomeRounded color='primary' />,
    },
    {
        title: 'Students',
        path: '/dashboard/admin/students',
        icon: <PersonRounded color='primary' />,
    },
    {
        title: 'Teachers',
        path: '/dashboard/admin/teachers',
        icon: <GroupRounded color='primary' />,
    },
    {
        title: 'User Accounts',
        path: '/dashboard/admin/account',
        icon: <AccountBoxRounded color='primary' />,
    },
    {
        title: 'Academic Subject',
        path: '/dashboard/admin/subjects',
        icon: <MenuBookRounded color='primary' />,
    },
    {
        title: 'Academic Schedule',
        path: '/dashboard/admin/schedules',
        icon: <ScheduleRounded color='primary' />,
    },
    {
        title: 'Academic Score',
        path: '/dashboard/admin/scores',
        icon: <GradeRounded color='primary' />,
    },
    
]

export const MenuStudent = [
    {
        title: 'Home',
        path: '/dashboard/student/home',
        icon: <HomeRounded color='primary' />,
    },
    {
        title: 'Profile',
        path: '/dashboard/student/profile',
        icon: <PersonRounded color='primary' />,
    },
    {
        title: 'Scores',
        path: '/dashboard/student/score',
        icon: <GradeRounded color='primary' />,
    },
    {
        title: 'Schedule',
        path: '/dashboard/student/schedule',
        icon: <ScheduleRounded color='primary' />,
    },
]

export const MenuTeacher = [
    {
        title: 'Home',
        path: '/dashboard/teacher/home',
        icon: <HomeRounded color='primary' />,
    },
    {
        title: 'Profile',
        path: '/dashboard/teacher/profile',
        icon: <PersonRounded color='primary' />,
    },
    {
        title: 'Scores',
        path: '/dashboard/teacher/score',
        icon: <GradeRounded color='primary' />,
    },
    {
        title: 'Schedule',
        path: '/dashboard/teacher/schedule',
        icon: <ScheduleRounded color='primary' />,
    },
]

export const SignOut = {
    title: 'Sign Out',
    path: '/',
    icon: <PowerSettingsNewRounded color='secondary' />,
}