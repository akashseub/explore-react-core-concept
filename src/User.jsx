export default function User({user}){

    const {name, email} = user;

    return(
        <div>
            <h4>Name: {name}</h4>
            <p>email: {email}</p>
        </div>
    )
}