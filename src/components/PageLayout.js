export const PageLayout=({header, children, footer})=>{
    return(
        <div>
            <header>{header}</header>
            <main>{children}</main>
            <footer>{footer}</footer>
        </div>
    )
}
