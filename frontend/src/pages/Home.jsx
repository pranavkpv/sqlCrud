function Home({ setIsLoggedIn }) {
  return (
    <div style={styles.container}>
      <h1>Home Page 🏠</h1>
      <p>You are logged in!</p>

      <button onClick={() => setIsLoggedIn(false)} style={styles.button}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  button: {
    padding: "10px 20px",
    cursor: "pointer"
  }
};

export default Home;
