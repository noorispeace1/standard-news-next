import { redirect } from "next/navigation";

const default_category_id = "04";

const Home = async () => {
  redirect(`/category/${default_category_id}`);
};

export default Home;