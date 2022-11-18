import ErrorMessage from "../errorMessage/ErrorMessage"

const Page404 = () => {
    return(
        <div>
        <ErrorMessage/>
          <p style = {{'textAlign': 'center','fontWeight': 'bold', 'fontSize': '24px'}}> 404. Page doesn'n exist </p>      
          {/* <Link to = {/} style = {{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}}>Back to main page</Link> */}
        </div>
    )
}
export default Page404;
