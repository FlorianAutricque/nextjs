function UserProfilPage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilPage;

export async function getServerSideProps(context) {
  return {
    props: {
      username: " max",
    },
  };
}
