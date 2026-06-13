export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      py-10
      "
    >
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-xl">Yahya Saeed</h3>

          <p className="text-gray-400">Frontend Developer</p>
        </div>

        <div className="text-gray-400">yahyasaeed171@gmail.com</div>
      </div>
    </footer>
  );
}
