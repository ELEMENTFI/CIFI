import React from 'react';

const Heros =({handleLogout})=>{

    return(

        <section className="">

            <nav>

<h2>Welcome</h2>
<button onClick={handleLogout}>Logout</button>

</nav>
            </section>

    );
}
export default Heros;