import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-700">
      <h1 className="bg-gray-300 rounded-sm underline decoration-wavy underline-offset-8 decoration-4 decoration-lime-500 p-8 rounded-md">
        Dom is learning tailwind
      </h1>

      <img
        className="py-10 opacity-50"
        src="https://assets3.thrillist.com/v1/image/2778887/size/gn-gift_guide_variable_c.jpg"
        alt="Hans Gruber"
      />

      <h2 className="py-20 flex space-x-8 ">
        <Link
          href="/about/page.tsx"
          className="no-underline hover:underline hover:uppercase"
        >
          About
        </Link>
        <Link
          href="https://i.imgflip.com/5c3y7l.gif"
          className="no-underline hover:underline hover:uppercase"
        >
          Dom's Secret
        </Link>
      </h2>

      <p className="">
        I can see the benfit to using tailwind or CSS fart as I will call it.
        For now it is feeling really alien.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
        repellendus asperiores nulla sunt expedita doloribus molestias molestiae
        odit, laboriosam quos, fugit fuga! Quaerat facere quisquam error
        consequuntur mollitia incidunt molestias? Commodi, praesentium officiis
        quo odio nisi saepe est voluptatem placeat, architecto repudiandae at
        repellendus doloribus dolorem non ratione sit delectus doloremque libero
        quae id ipsa distinctio. Quos, ipsam. Officiis, deleniti. Aperiam
        adipisci est ipsum minus magnam repellendus rerum. Laborum maiores quae
        atque numquam reiciendis molestiae cupiditate ut. Asperiores earum autem
        doloribus corporis dolores magnam, eum, nam ex quaerat molestiae ut.
        Nihil, repellat ipsum, totam porro quis magnam sunt fugit provident
        praesentium quia consectetur minima eius quisquam tempora cupiditate
        placeat eos laboriosam incidunt aspernatur cum ea deserunt ratione.
        Quod, alias inventore? Dolor pariatur perspiciatis est fugiat quos unde
        voluptas magnam, sint earum quis enim nostrum vero sequi! Error libero
        unde quia, accusantium vel cupiditate esse saepe dicta adipisci
        obcaecati odit voluptatum. Placeat maiores accusantium, ad maxime
        tempore velit porro commodi ipsa, illo corrupti numquam eos repellat cum
        pariatur nesciunt veritatis? Ipsum soluta consequuntur nihil! Eaque
        veritatis illum, pariatur vitae hic placeat. Perspiciatis iure expedita
        reiciendis earum unde, magni explicabo laborum accusamus odit illo quas
        nam vero accusantium quia iusto, aliquid fugit officia! Necessitatibus
        qui ea sit, illum quidem debitis doloremque exercitationem! Ab
        reiciendis officia qui, placeat dolores ullam enim earum aliquid
        quibusdam sapiente omnis id vitae asperiores quaerat fuga eum rem
        architecto iure illum voluptas dolor nesciunt nisi distinctio neque?
        Deleniti? Quas omnis quia corrupti sequi? Ad est rerum illo suscipit
        eveniet aspernatur sequi consectetur doloremque architecto neque,
        aperiam impedit praesentium laboriosam earum, perspiciatis pariatur
        beatae expedita necessitatibus sint itaque. Libero. Reiciendis ad
        officiis nihil expedita nobis dolorem sequi repellat soluta, harum hic
        sit inventore itaque enim sed reprehenderit dolore consequuntur? Eos
        numquam quas mollitia corrupti ad fuga deleniti facilis in? Molestias
        cumque, perspiciatis voluptate officiis quia quod exercitationem sunt
        obcaecati, amet perferendis soluta eos doloribus! Possimus qui
        voluptatibus, iste ratione adipisci iusto quam, natus quos omnis sed
        similique numquam deserunt. Totam quisquam porro, distinctio sit animi,
        veniam iste exercitationem facilis pariatur beatae saepe dicta tempora,
        provident aperiam perferendis. Laborum voluptatum velit natus nobis rem
        unde voluptatibus asperiores illum explicabo necessitatibus? Doloremque
        mollitia corrupti saepe blanditiis quam voluptas natus consequatur
        maxime maiores animi distinctio harum, ut aliquid tenetur facere totam,
        ipsam possimus atque inventore suscipit obcaecati tempore. Nobis
        consequuntur quis accusantium! Labore nobis atque exercitationem
        obcaecati. Possimus cumque sunt quasi necessitatibus nostrum dolorum
        labore totam fuga officia perferendis aliquam nulla culpa, accusantium
        similique! Est, nulla voluptatibus laborum inventore tenetur placeat
        maxime! Illo libero labore quis beatae. Obcaecati nesciunt culpa
        asperiores consectetur et dolor sapiente odit mollitia quasi quibusdam
        molestias, aperiam, ad temporibus necessitatibus vero expedita qui
        dignissimos fuga neque labore. Hic!
      </p>
    </main>
  );
}
