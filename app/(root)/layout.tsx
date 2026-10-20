import React from 'react'
import Header from "@/components/Header";

const Layout = ({children}:{ children : React.ReactNode}) => {
    const user = {id: "" ,name: "Amany", email: "amanysamy268@gmail.com"};
    return (
        <main className="min-h-screen text-gray-400">
            {/*Header*/}
            <Header user={user} />
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}
export default Layout
