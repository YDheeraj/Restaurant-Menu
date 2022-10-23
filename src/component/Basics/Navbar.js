
function NavBar({filterItem, menulist}){




    return (
      <>
        <nav className="navbar" style={{textAlign:"center"}}>
            <div className="btn-group">
            {
                menulist.map((ele)=>{
                    return <button className="btn-group__item" onClick={()=>filterItem(ele)}>{ele}</button>
                })
            }
            </div>

        </nav>
      </>
    )
}

export default NavBar;