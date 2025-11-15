function Profile() {
    return (
        <div>
            <h1>Profile Card Challenge</h1>
            <ProfileCard
             name="Alice" // props
             age={25}  // props
             greeting={  // passing jsx as props
                <div>
                    <strong>Hi Alice, Have a wonderful day!</strong>
                </div>
             }
            >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
            </ProfileCard>
            
        </div>
    )
}

export default Profile;


function ProfileCard(props) {
    return (
        <>
        <h2>Name:{props.name}</h2>
        <p>Age:{props.age}</p>
        <p>Greeting:{props.greeting}</p>
        <div>{props.children}</div>
        </>
    );
}