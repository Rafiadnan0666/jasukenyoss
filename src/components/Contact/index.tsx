import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"


              
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Butuh Bantuan? Kirimkan Pesan
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Tim dukungan kami akan segera menghubungi Anda melalui email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Nama Anda
                      </label>
                      <input
                        type="text"
                        placeholder="Masukkan nama Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email Anda
                      </label>
                      <input
                        type="email"
                        placeholder="Masukkan email Anda"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
  
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Pesan Anda
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Masukkan pesan Anda"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                     
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Kirim Pesan
                    </button>
                    <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="mt-8 bg-white p-6 rounded-sm shadow-three dark:bg-gray-dark">
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Hubungi Kami
              </h3>
              <p className="mb-2 text-base font-medium text-body-color dark:text-body-color-dark">
                📱 WhatsApp:{" "}
                <a
                  href="https://wa.me/6281282693784"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  +62 812-8269-3784
                </a>
              </p>
              <p className="text-base font-medium text-body-color dark:text-body-color-dark">
                📸 Instagram:{" "}
                <a
                  href="https://instagram.com/jasukenyoss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  @jasukenyoss
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
