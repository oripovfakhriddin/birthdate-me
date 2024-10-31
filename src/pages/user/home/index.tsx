import { Fragment, useContext, useState } from "react";
import CloseIcon from "../../../assets/icons/close-icon";
import GiftsIcon from "../../../assets/icons/gifts-icon";
import { LanguageContext } from "../../../context/language";

const HomePage = () => {
  const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(true);
  const { lang } = useContext(LanguageContext);

  const toggleModal = () => {
    setIsOpenNotificationModal(!isOpenNotificationModal);
  };

  return (
    <Fragment>
      <section id='home'>
        {lang.lorem} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veritatis assumenda porro quaerat id, officia deserunt voluptatibus
        unde, fugiat earum quam velit excepturi ad? Atque deserunt reiciendis
        dolorem suscipit nihil exercitationem possimus eius expedita consectetur
        reprehenderit necessitatibus, perferendis enim, magni voluptatem nam
        sint molestias consequuntur doloremque, maxime sed veniam. Quas, cumque
        nostrum. Mollitia laboriosam dolorem, distinctio iusto, neque eum
        consequuntur eos doloremque veniam, sapiente placeat sit voluptas!
        Quidem, consequuntur! Dolorem, asperiores reprehenderit soluta sapiente
        dolorum saepe excepturi ab repudiandae impedit adipisci similique eos
        deserunt veniam voluptas placeat accusamus unde amet enim perferendis
        dolor. Assumenda id dolore minus officiis numquam, vel quisquam corrupti
        maxime cum accusantium enim aspernatur quasi nisi praesentium magnam
        beatae quae tempore accusamus, aliquid tempora? Quo recusandae suscipit
        quia deleniti ipsam temporibus, quam voluptatem possimus ullam aut
        mollitia animi ipsum necessitatibus quis beatae officia sit voluptates
        consectetur voluptatum consequatur? Assumenda rem omnis fuga. Deleniti
        explicabo quam dolorem cupiditate, dolor officiis voluptate sit nulla,
        quis fugit ducimus aliquid ipsa atque blanditiis neque ad iste ipsum
        illum sapiente laborum minima ipsam recusandae? Totam quibusdam possimus
        quos quae at, nostrum, quia recusandae dolore quasi, aliquid consectetur
        quam laboriosam tempore temporibus eius dolorem! Numquam reiciendis
        autem quod rem explicabo cupiditate, incidunt exercitationem deleniti
        odio placeat eaque blanditiis praesentium. Nobis quam impedit, placeat
        tenetur excepturi quibusdam adipisci accusamus, inventore minus nihil
        voluptatem facilis ipsa laborum sit veniam iste obcaecati fugit ipsam
        rem? Illo unde reprehenderit velit ducimus rem! Sit perferendis,
        adipisci incidunt consequatur dicta fuga dolorem quibusdam eveniet
        suscipit mollitia aspernatur, omnis voluptatibus in nulla, voluptates
        labore sequi quas voluptatem. Laboriosam maxime nesciunt nihil eos saepe
        dolor ipsa atque quae veritatis? Delectus hic aliquam ullam quos illum
        esse unde non impedit temporibus culpa. Non corporis fugiat temporibus
        perspiciatis iste odit incidunt possimus illo nesciunt minima similique
        aperiam, error, quos vel corrupti, deleniti sed molestiae. Praesentium
        vero molestias at nostrum id! Ducimus magni doloribus assumenda. Odio
        quae tenetur quisquam laboriosam rem enim consectetur provident facere
        quia doloribus inventore delectus omnis dolor eveniet, repellat nostrum
        tempora! Possimus rem tenetur numquam eveniet quidem. Aliquid,
        distinctio, dignissimos earum dolorem dolor natus commodi illum ullam
        cum, quod omnis laborum dolores. Nulla iusto doloremque tempore delectus
        a beatae eveniet distinctio sit mollitia inventore, natus dolores
        tenetur accusantium ratione est ad eligendi recusandae soluta voluptates
        assumenda officiis suscipit impedit? Earum nostrum aliquam magnam
        blanditiis, quia harum, animi delectus necessitatibus libero repellat
        laborum dicta labore assumenda saepe accusantium modi unde nesciunt iste
        aliquid maxime officiis omnis facilis eligendi dolore! Atque dolorum
        commodi exercitationem. Accusamus quo molestias nulla quaerat dicta,
        nihil vitae praesentium officia amet, voluptatem quia voluptate? Nam,
        fuga. Illum hic asperiores dolorum perspiciatis. Corporis fuga nemo
        rerum quibusdam quae delectus ad aspernatur explicabo cum, veniam est
        quam optio saepe id odit consectetur quod! Nostrum fugiat eligendi sunt
        quam est, blanditiis laboriosam delectus. Voluptatibus illo enim
        praesentium fuga a, veritatis quam veniam animi fugit qui vel
        repellendus blanditiis assumenda quaerat quisquam autem sed
        exercitationem iure excepturi. Maxime quae veniam dolorem laborum
        repudiandae vitae placeat tenetur in laudantium rem neque est
        blanditiis, quas, qui temporibus doloremque consectetur atque ab quam?
        At mollitia voluptate, nemo recusandae porro ab deserunt architecto
        aspernatur odit voluptas officia exercitationem error inventore quis
        dolorum tempora molestias eveniet atque, vero maiores, ea iusto!
        Voluptatem maxime pariatur voluptate rem deleniti veniam ex perspiciatis
        impedit delectus! Voluptatem mollitia ab provident perspiciatis quos
        sunt, aliquid quas veritatis accusantium fugiat reprehenderit tenetur
        veniam. Eum quo tempore facilis sed dolore est repellendus quam ipsa
        ratione. Recusandae, ducimus explicabo voluptate, optio laborum eligendi
        adipisci maxime earum, a id sapiente mollitia amet vitae officia quasi
        quam illum ipsum inventore voluptas repudiandae nam deserunt ab. Fuga
        ducimus sit, maiores debitis suscipit libero eveniet facere repellat ex
        eos aperiam nam at ab impedit tenetur soluta magnam incidunt quo
        provident numquam non? Corrupti incidunt numquam nam quo itaque tenetur
        sequi, alias reprehenderit iste accusamus esse corporis consequatur modi
        est magnam cum fuga deleniti ipsam quisquam tempore aliquam repellendus
        harum explicabo! Officiis vel, dolorem, corporis quam ipsam placeat
        nobis recusandae maxime nihil quidem quaerat omnis? Totam architecto
        ullam error tempora a quaerat, iure fugiat exercitationem laudantium
        obcaecati repudiandae suscipit vero deleniti laborum eum atque odio
        officia sint earum facilis. Facere iure distinctio quod autem nobis
        doloribus, perferendis ad eos, dolorum animi pariatur explicabo maxime
        voluptatibus amet? Maiores quam dolore necessitatibus! Rem maiores
        fugiat reprehenderit temporibus magnam. Soluta incidunt sit modi minus,
        ab aliquid accusamus temporibus distinctio sed libero facilis optio
        exercitationem, architecto laudantium provident accusantium facere
        quidem aut dolor. A nobis eligendi dolores quaerat. Aperiam cum
        perferendis in totam est, qui, temporibus a reiciendis enim quas beatae
        facere nemo cumque? Aliquid, deserunt eos id porro dolorum iste
        accusantium vitae quidem, aperiam dolorem quis, tempora voluptatum
        veniam maxime facere eaque delectus esse amet enim? Optio, quis! Nihil
        nemo velit quibusdam voluptatum, mollitia inventore dignissimos dolore
        totam sit obcaecati porro suscipit illum! Quo eligendi similique,
        voluptatum tempore eum, dolore ad delectus blanditiis iusto quasi,
        repellat magnam laborum odio atque veritatis excepturi tempora dicta?
        Velit quaerat eum reprehenderit, asperiores mollitia esse ad, ea laborum
        repudiandae totam sunt officiis. Quam assumenda necessitatibus quos vel
        eius ea maiores iusto quasi minima consectetur possimus sequi modi
        itaque provident, placeat rerum similique quas. Saepe adipisci et
        voluptatibus a corporis voluptas repudiandae tempora deleniti ratione,
        incidunt perspiciatis alias accusantium dicta praesentium quisquam quia?
        Iusto amet, fugit eum voluptatum consectetur dolore rerum, voluptatibus
        sint optio unde officiis neque expedita impedit, nesciunt quo eveniet in
        qui quaerat accusantium ut blanditiis non ipsa? Fuga illum voluptatum
        qui mollitia ipsa rem magni sit vel facilis nostrum. Omnis culpa,
        officiis perferendis soluta voluptatem incidunt nemo in eligendi, quia
        dolorum delectus, fugiat iste inventore deleniti nam eius repellat quas
        provident officia quasi doloremque deserunt veniam praesentium magni?
        Deserunt nesciunt recusandae cupiditate, laudantium, enim odit fugit
        veniam eos accusamus, ad eaque eveniet corrupti illum earum! Odit
        quaerat ducimus voluptatem error accusantium, minima ut voluptas
        quisquam quidem molestias. Voluptatibus at debitis ut ipsam, ullam
        excepturi minima veniam illum eaque sit ratione dolores asperiores ipsa
        suscipit repudiandae ad commodi obcaecati molestiae facere nemo
        perspiciatis tenetur quasi? Cupiditate, corrupti!
      </section>
      <div>
        <div
          id='popup-modal'
          className={`${
            isOpenNotificationModal ? "flex" : "hidden"
          } backdrop-blur overflow-y-auto overflow-x-hidden fixed  top-0 right-0 left-0  z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}>
          <div className='relative p-4 w-full max-w-md max-h-full'>
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              <button
                type='button'
                className='absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='popup-modal'
                onClick={() => {
                  toggleModal();
                }}>
                <CloseIcon />
                <span className='sr-only'>Close modal</span>
              </button>
              <div className='p-4 md:p-5 text-center'>
                <GiftsIcon className='mx-auto mb-4 mt-8 text-red-500 w-14 h-14' />
                <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                  Tug'ilgan kuningiz bilan 🎉
                </h3>
                <button
                  data-modal-hide='popup-modal'
                  type='button'
                  className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'>
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
