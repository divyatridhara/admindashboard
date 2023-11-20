import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+91 9491900212">+91 9491900212</Typography.Link>
      <Typography.Link href="https://www.linkedin.com/in/divya-tridhara-mallipudi-2806b7216/" target={"_blank"}>
        Linkedin
      </Typography.Link>
      <Typography.Link href="https://github.com/divyatridhara" target={"_blank"}>
        Github
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
