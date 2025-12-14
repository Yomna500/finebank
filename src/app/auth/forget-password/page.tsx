import { Metadata } from "next";
import AuthForm from "../components/ِAuthForm";

export const metadata: Metadata = {
  title: "Forget Password",
  description:
    "Reset your Finebank account password securely and regain access to your financial dashboard.",
};

export default function page() {
  return <AuthForm mode="forgetPassword" />;
}
