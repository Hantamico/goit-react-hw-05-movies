import { NavLink, Outlet } from "react-router-dom";
import css from './SharedLayout.module.css'
import { Suspense } from "react";
import { TailSpin } from "react-loader-spinner";

const SharedLayout = () => {
    
    return (
        <section className={css.container}>
            <nav className={css.nav__list}>
                <NavLink className={css.nav___item} to="/">Home</NavLink>
                <NavLink className={css.nav___item} to="/movies">Movies</NavLink>
            </nav>
            <Suspense fallback={<TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{
                    position: "absolute",
                    top: "50%",
                    left: "45%",
                }}
                wrapperClass=""
                visible={true}
            />}>
                <Outlet />
            </Suspense>
            
        </section>
    );
}

export default SharedLayout;