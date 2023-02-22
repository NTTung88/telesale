//! component
import { Button } from "../../components/Button"
//! css
import styles from './Header.module.css'
//! icon
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { FiMoreHorizontal, FiHome } from 'react-icons/fi'
//! authcontext
import { useAxios } from "../../context/AxiosContex"
import { useAuth } from "../../context/AuthContext"
//! modules
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export function Header() {
    const {
        brand,
        user,
        removeUser,
        removeToken,
        removeBrand,
        token } = useAuth()
    
    const { getBrandById } = useAxios()
    const { UserName } = user
    const { data } = useQuery(['brand', brand], () => getBrandById(brand))
    const [drop, setDrop] = useState(false)

    //Đăng xuất
    const handleLogout = () => {
        removeUser()
        removeToken()
        removeBrand()
    }

    function openDrop() {
        setDrop(!drop)
    }
    return (
        <>
        <div className={styles.navs}>
            <div className={styles.left__nav}>
                <AiOutlineMenu
                    className={styles.media}
                    style={{ color: 'black', fontSize: '25px', marginRight: '10px' }} />
                <div className={styles.left__nav_ch}>
                    <FiHome
                        style={{ color: 'black', fontSize: '14px', fontWeight: 'bold' }}
                    />
                    <span style={{ marginLeft: '10px' }}>/ Khach Hang</span>
                </div>
            </div>

            <div className={styles.right__nav}>
                <span>Thương hiệu: {data?.name}</span>
                <p>
                    <AiOutlineUser />
                    Xin chào: {UserName}
                    <FiMoreHorizontal
                        onClick={openDrop}
                        style={{ cursor: 'pointer', marginLeft: '10px', fontSize: '18px' }} />
                    {drop && (
                        <div className={styles.dropdown}>
                            <span onClick={handleLogout}>Đăng xuất</span>
                        </div>
                    )}
                </p>
            </div>
        </div>
        </>
    )
}