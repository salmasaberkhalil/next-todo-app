import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "@/components/loginform";

export const metadata = {
  title: "Login - My Store",
  description: "Sign in to your account at My Store.",
};

export default function LoginPage() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center bg-light">
          <h1 className="fw-bold text-primary">Login</h1>
          <p className="lead text-muted">Sign in to access your account.</p>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}