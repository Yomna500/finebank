import { Metadata } from "next";
import AuthForm from "../components/ِAuthForm";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create a Finebank account and start managing your finances with ease.",
};

export default function Page() {
  return <AuthForm mode="register" />;
}
