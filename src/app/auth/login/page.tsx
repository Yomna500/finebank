import { Metadata } from "next";
import AuthForm from "../components/ِAuthForm";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Login to your Finebank account to access your financial dashboard securely.",
};

export default function Page() {
  return <AuthForm mode="login" />;
}
