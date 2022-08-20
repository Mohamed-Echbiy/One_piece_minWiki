import React from "react";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
function TheAnimeMg() {
  return (
    <Div>
      <Swiper
        modules={[Navigation, EffectCreative, Pagination]}
        navigation
        pagination={{ clickable: true }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={700}
      >
        <SwiperSlide>
          <div className="The__container">
            <div className="The__info">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                animateOnce={true}
                offset={0}
              >
                <h2>Anime:</h2>
                <p>
                  One of the most popular anime's in the world, One Piece,
                  written by Eiichiro Oda, has taken the world by storm, with
                  new plot lines each episode! One Piece, starring Monkey D.
                  Luffy, a young man with the dream of becoming the Pirate King,
                  fights villains with many different powers, in order to become
                  the strongest! The first episode of One Piece (in Japan)
                  debuted on the 20th of October 1999. Monkey D. Luffy, sets out
                  on his journey to become the Pirate King, and meets
                  extraordinary people to join his Pirate Crew!
                </p>
              </AnimationOnScroll>
            </div>
            <div className="Anime__image The__Image">
              <div className="The__overlay"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="The__container ">
            <div className="The__info ">
              <h2>The Manga:</h2>
              <p>
                One of the most popular manga's in the world, One Piece, written
                as well as illustrated by Eiichiro Oda. The manga started off as
                being featured in the weekly magazine, Weekly Shōnen Jump, since
                July 19th 1997. As the years have gone by, the series has grown
                bigger and larger with Luffy growing stronger and stronger. His
                dream of becoming The King of the Pirates is drawing closer. The
                manga begins with Luffy as a boy, his whole life changing when
                he eats a Devil Fruit. Ten years later, Luffy encounters many
                new people, and collects members for his elite pirate crew!
              </p>
            </div>
            <div className="Manga__image The__Image">
              <div className="The__overlay"></div>
            </div>
          </div>
        </SwiperSlide>
        {/* mangaka */}
        <SwiperSlide>
          <div className="The__container ">
            <div className="flex__it">
              <div className="oda__image">
                <img
                  src="https://s4.anilist.co/file/anilistcdn/staff/large/n96881-Cyv6wFJxpDw7.png"
                  alt="echiro oda picture"
                  loading="lazy"
                  width="250"
                  height="375"
                />
              </div>
              <div className="biography">
                <h2>The Mangaka:</h2>
                <p>
                  Eiichiro Oda, born January 1, 1975 in Kumamoto City, Kumamoto
                  Prefecture in Japan, is a professional mangaka, best known as
                  the creator of the manga One Piece. A dedicated writer and
                  artist since adolescence, Oda began working for Shueisha's
                  Shonen Jump at 17 and currently stands as one of the world's
                  most prominent mangaka, earning an estimated ¥3.1 billion
                  (US$26 million) per year. Despite his rigorous work schedule,
                  he maintains steady correspondence with fans (and the wider
                  public) through both formal interviews and informal channels
                  such as his SBS columns.
                </p>
              </div>
            </div>
            <div className="Mangaka__image The__Image">
              <div className="The__overlay"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="The__container ">
            <div className="flex__it">
              <div className="studio__image">
                <img
                  src="https://cdn.myanimelist.net/img/common/companies/18.png"
                  alt="toei animation logo"
                  loading="lazy"
                  width="250"
                  height="250"
                />
              </div>
              <div className="biography">
                <h2>The Studio:</h2>
                <p>
                  The studio was founded by animators Kenzō Masaoka and Zenjirō
                  Yamamoto in 1948 as Japan Animated Films (日本動画映画, Nihon
                  Dōga Eiga, often shortened to 日動映画 (Nichidō Eiga)). In
                  1956, Toei purchased the studio and it was renamed Toei Doga
                  Co., Ltd. (東映動画株式会社, Tōei Dōga Kabushiki-gaisha,
                  "dōga" is Japanese for "animation"), doing business as Toei
                  Animation Co., Ltd. outside Japan. In 1998, the Japanese name
                  was renamed to Toei Animation. It has created a number of TV
                  series and movies and adapted Japanese comics as animated
                  series, many popular worldwide. Hayao Miyazaki, Isao Takahata,
                  Yasuji Mori, Leiji Matsumoto and Yōichi Kotabe have worked
                  with the company. Toei is a shareholder in the Japanese anime
                  satellite television network Animax with other anime studios
                  and production companies, such as Sunrise, TMS Entertainment
                  and Nihon Ad Systems Inc.The company is headquartered in the
                  Ohizumi Studio in Nerima, Tokyo.
                </p>
              </div>
            </div>
            <div className="Studio__image The__Image">
              <div className="The__overlay"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Div>
  );
}

export default TheAnimeMg;

const Div = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  .swiper-button-next,
  .swiper-button-prev,
  h2 {
    color: gold;
  }
  .swiper-button-next,
  .swiper-button-prev {
    @media (max-width: 420px) {
      display: none;
    }
  }
  .The__container {
    width: 100%;
  }
  .flex__it {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .oda__image,
    .studio__image {
      width: 250px;
      margin-bottom: 20px;
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
  .The__info {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: white;
    line-height: 1.7;
    font-size: 1.3rem;
    min-width: 300px;
    max-width: 800px;
    letter-spacing: 2px;
    @media (max-width: 765px) {
      font-size: 0.8rem;
    }
    @media (min-width: 766px) and (max-width: 992px) {
      font-size: 1rem;
    }
  }
  .flex__it {
    width: 100%;
    padding: 0px 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    color: white;
    line-height: 1.7;
    font-size: 1.3rem;
    letter-spacing: 2px;
    @media (max-width: 765px) {
      font-size: 0.8rem;
    }
    @media (min-width: 766px) and (max-width: 992px) {
      font-size: 1rem;
    }
    .biography {
      width: 70%;
      min-width: 300px;
      margin-left: 20px;
    }
  }
  .The__Image {
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }
  .Manga__image {
    background-image: url("https://i.pinimg.com/originals/49/44/7d/49447d54408e3db794333cf7d53760ba.jpg");
  }
  .Anime__image {
    background-image: url("https://deluxe.news/wp-content/uploads/2022/05/One-Piece-Every-Straw-Hat-Pirate-Ranked-By-Their-Designs.jpg");
  }
  .Mangaka__image {
    background-image: url("https://i.pinimg.com/originals/41/56/ea/4156ea481aeb66db6544f3f9faa27221.jpg");
  }
  .Studio__image {
    background-image: url("https://shivsaga.com/wp-content/uploads/2022/02/toei-animation-1.jpg");
  }
  .The__overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000000f5;
  }
  .swiper-pagination {
    span {
      width: 15px;
      height: 15px;
    }
    span.swiper-pagination-bullet-active {
      background-color: gold;
    }
    @media (min-width: 421px) {
      display: none;
    }
  }
`;
