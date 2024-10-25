import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <h2 className="text-3xl font-bold">
          Welcome To Felix It's System Ahmedabad
        </h2>
        <p>Please fill in the form below</p>

        <ContactForm />
      </div>
    </>
  );
}

{
  /* <h2 class="text-center text-xl bg-gray-600 p-5 text-white">
  Welcome To DashBoard
</h2> */
}
