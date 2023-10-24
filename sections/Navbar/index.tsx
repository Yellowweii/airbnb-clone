import Container from '@/components/Container'
import React from 'react'
import Image from 'next/image'
import Search from '@/components/Search'
import UserMenu from '@/components/UserMenu'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Image className='hidden md:block cursor-pointer' src="/images/logo.png" width={100} height={100} alt="logo" />
                    <Search />
                    <UserMenu />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar