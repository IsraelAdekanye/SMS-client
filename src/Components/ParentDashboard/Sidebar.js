import { BiHome, BiDetail, BiCreditCard } from "react-icons/bi";
import {  MdMonetizationOn } from "react-icons/md";

export const Sidebar = [
    {
        title: 'Home',
        path: '/Parent-Dashboard',
        icon: <BiHome></BiHome>
    },
    {
        title: 'Payment',
        path: '/Payment',
        icon: <MdMonetizationOn></MdMonetizationOn>
    },
    {
        title: 'Transactions',
        path: '/Transactions',
        icon:  <BiCreditCard></BiCreditCard>
    },
    {
        title: 'Result',
        path: '/Result',
        icon: <BiDetail></BiDetail>
    } 
]