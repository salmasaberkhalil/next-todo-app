import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <div
      style={{
        backgroundColor: "#f9f9fb",
        border: "1px solid #e0e0e0",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        height: "100%",
      }}
    >
      {/* <Image src="./next.svg" width={300} height={300} alt="dd"/> */}
      {/* <Image src={user.image} width={300} height={300} alt="dd"/> */}
      <h4 style={{ marginBottom: "10px", color: "#2c3e50" }}>{user.name}</h4>
      <p style={{ margin: "5px 0", color: "#555" }}>
        📧 <strong>Email:</strong> {user.email}
      </p>
      <p style={{ margin: "5px 0", color: "#555" }}>
        📞 <strong>Phone:</strong> {user.phone}
      </p>
    </div>
  );
}
