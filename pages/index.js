const WarningTriangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 123.996 123.996"
    fill="gray"
    width="48px"
    height="48px"
  >
    <path
      d="M9.821,118.048h104.4c7.3,0,12-7.7,8.7-14.2l-52.2-92.5c-3.601-7.199-13.9-7.199-17.5,0l-52.2,92.5
		C-2.179,110.348,2.521,118.048,9.821,118.048z M70.222,96.548c0,4.8-3.5,8.5-8.5,8.5s-8.5-3.7-8.5-8.5v-0.2c0-4.8,3.5-8.5,8.5-8.5
		s8.5,3.7,8.5,8.5V96.548z M57.121,34.048h9.801c2.699,0,4.3,2.3,4,5.2l-4.301,37.6c-0.3,2.7-2.1,4.4-4.6,4.4s-4.3-1.7-4.6-4.4
		l-4.301-37.6C52.821,36.348,54.422,34.048,57.121,34.048z"
    />
  </svg>
);

function Home() {
  return (
    <div
      style={{
        padding: 4,
        margin: 0,
        border: 0,
        padding: 0,
        fontFamily: "Arial,Helvetica,sans-serif",
        fontSize: "30px",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "4%",
        backgroundColor: "#f1f4f4",
        color: "gray",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1
        style={{
          color: "gray",
          textAlign: "center",
        }}
      >
        <WarningTriangle /> Página em construção
      </h1>

      <p style={{ textAlign: "center" }}>
        Essa página será um projeto para guardar, na nuvem, todas as informações
        relevantes sobre meus projetos pessoais, aproveitando o fluxo de
        trabalho do obsidian.md. A maioria das informações serão restritas de
        outros usuários por um mecanismo de autenticação, mantendo as
        informações sensíveis intocadas e inacessíveis.
      </p>
    </div>
  );
}

export default Home;
