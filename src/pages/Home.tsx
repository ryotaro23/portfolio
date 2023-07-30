import { Typography, Button, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Portfolio } from '../components/Portfolio';
import AboutPage from './AboutPage';
import Work from './Work';
import React, { useState, useEffect } from 'react';
import Contact from '../components/Contact';


const Home: React.FC = () => {

const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0, 0.0)');

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const section0 = document.getElementById('section0');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');
    const section4 = document.getElementById('section4');
    if (!section0 || !section1 || !section2 || !section3 || !section4) {
      console.warn('Some sections are missing');
      return;
    }
    const section0Top = section0.offsetTop;
    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const section3Top = section3.offsetTop;
    const section4Top = section4.offsetTop;

    if (currentScrollY > section0Top && currentScrollY < section1Top) {
    const scrollPercentageInSection0to1 = (currentScrollY - section0Top) / (section1Top - section0Top);
    const colorValue = 255 - Math.round(255 * scrollPercentageInSection0to1);
    setBackgroundColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    } else if (currentScrollY > section1Top && currentScrollY < section2Top) {
    const scrollPercentageInSection1to2 = (currentScrollY - section1Top) / (section2Top - section1Top);
    const colorValue = Math.round(255 * scrollPercentageInSection1to2);
    setBackgroundColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    } else if (currentScrollY > section2Top && currentScrollY < section3Top) {
    const scrollPercentageInSection2to3 = (currentScrollY - section2Top) / (section3Top - section2Top);
    const colorValue = 255 - Math.round(255 * scrollPercentageInSection2to3);
    setBackgroundColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    } else if (currentScrollY > section3Top && currentScrollY < section4Top) {
    const scrollPercentageInSection3to4 = (currentScrollY - section3Top) / (section4Top - section3Top);
    const colorValue = Math.round(255 * scrollPercentageInSection3to4);
    setBackgroundColor(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    } 
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const StyledMain = styled('main')({
  margin: 'auto',
  background: backgroundColor,
  height: 'auto',
});


const Landing = styled(Box)({
  flexWrap: 'nowrap',
  height: '100%',
  width: '100%',
  color: '#333',
  fontFamily: 'sans-serif',
  });
  const LandingText = styled(Box)({
    display: 'flex',
    flex: '0 1 40vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingRight: '1rem',
    paddingLeft: '1rem',
  });
  
  const LandingImage = styled(Box)({
    background: `url(/ryotaro/welcome.png) center/cover no-repeat`,
    height: '100vh',
    flex: '0 1 60vw',
    margin: 0,
  });
  
  const Portfoliotitle = styled(Typography)({
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '1%',  
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    fontFamily: 'sans-serif',
  
  });
  const PortfolioText = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    fontFamily: 'sans-serif', 
  });
  const Portfolios = styled(Box)({

  });
  const Abouttitle = styled(Typography)({
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '1%',  
    fontWeight: 'bold',
    fontSize: 50,
    color: '#333',
    fontFamily: 'sans-serif',
  
  });
  const AboutText = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#222',
    fontFamily: 'sans-serif', 
  });
  const ContactTitle = styled(Typography)({
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '1%',  
    fontWeight: 'bold',
    fontSize: 50,
    color: '#333',
    fontFamily: 'sans-serif',
  
  });
  const ContactText = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#222',
    fontFamily: 'sans-serif', 
  });
  const WorkTitle = styled(Typography)({
    textAlign: 'center',
    paddingTop: '5%',
    paddingBottom: '1%',  
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
    fontFamily: 'sans-serif',
  
  });
  const WorkText = styled(Typography)({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    fontFamily: 'sans-serif', 
  });

  const portfolioItems = [
      {
        title: '株式会社ドリームアーツでの長期インターンシップ',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/smartDB.png',
        hoverImageUrl: '/ryotaro/smartDB2.png',
        modalId: 'portfolioModal1',
        description: '約半年間もの期間でreact,Typescript,storybook,Jestを用い、チームメンバーの一員としてアジャイル開発を経験しました。開発の中で多くの場面を通してコードを「読む・読まれる」ということの重要性を感じられた。まず「読まれる」ことの大切さを感じたのはメンターさんを初めとして多くチームメンバーにレビュー対応を行っていただけからです。レビュー対応では自分の全く気づかなかった視点からのご指摘や自分の知らなかった部分のレビューをいただくことができた。自分に対するFBは自分の伸び代でありとてもためになるものでした。レビュー対応だけで半日費やしたりすることもあったりしましたがその結果より精巧なものができる感覚を感じられて楽しかった。続いて「読む」ことの大切さは実装を行う中で日々感じました。他の人が書いたコードを参考にしたり、ネットで調べたコードを読んだりと理解するために理論だけでなくコードを読むことが多かったように思う。以上のことから今後コードを読まれることを前提としたコードを書くことを意識する必要があると思いました。',
      },
      {
        title: 'ハッカソン準優勝',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/ToyoSaaS.png',
        hoverImageUrl: '/ryotaro/Toyo.jpg',
        modalId: 'portfolioModal1',
        description: 'こちらは豊洲市場をDX化する取り組みをテーマにPHP、Laravalを用いて開発しました。3日間という限れた時間の中でクライアントを納得させるプロダクトを開発することを目標としていました。そのためタスクをMiroでブレストし、優先順位をつけて取り組みました。ハッカソン当日にむけてチームで団結力を高めるために開発を行ったり、深い話しを夜な夜なしたことはいい思い出です笑チームメンバーは私の「やりたいこと」に関して語り合ってくれました。そのおかげで今、私は自分のやりたいことに取り組めています。ありがとう。',
      },
      {
        title: 'BeDoctorConsultingでの長期インターンシップ',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/BDC1.jpg',
        hoverImageUrl: '/ryotaro/BDC2.jpg',
        modalId: 'portfolioModal1',
        description: '開発チームの一員として開発を行いました。具体的な業務としては病院の電子カルテ管理アプリケーションの開発（typescript,react,mongoDB,AWS等）、電子カルテのテストコード作成（jest)、電子カルテのマニュアル作成、病院とのミーティング,ヒアリングなど上流工程のお仕事にも携わる機会もあり、幅広く活動しております。実際のプロダクトは守秘義務によりお見せすることができないため実装する北海道の病院にいったときにごちそうになったおいしいごはんと空港にいた熊の置物の写真を載せました笑非常に様々な経験をさせていただいたインターンでした。',
      },
      {
        title: '超伝導に関する研究',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/lab1.png',
        hoverImageUrl: '/ryotaro/lab2.jpg',
        modalId: 'portfolioModal1',
        description: '千葉大学工学部山本研で約一年間超伝導に関する研究を行っていました。少数精鋭でプロジェクトを組み、ボルテックスラチェット効果の観測を目標に取り組みました。研究テーマは分子動力学シミュレーションをもちいた二次元的なボルテックスのダイナミクスに関する研究です。研究の目的としてはボルテックスラチェッド効果によって既存のデバイスの機能を向上することや既存に存在しない新しい超電導デバイスの開発が期待されるからだ。したがって、ボルテックス・ラチェット効果の発現機構を調べ、ボルテックスの挙動について詳しく理解することは研究の興味深い対象となる。実験内容としては実験系に基づいた条件でボルテックスを一つの粒子として見立て、分子動力学法でのボルテックス・ラチェット効果のシミュレーションを適用する。C++を用いて分子動力学シミュレーションによるボルテックスの運動について計算した。今後の展望としてはさらにラチェット効果が期待できるアンチドットの配列方法、磁場、電流値の最適化を図ることを目標とする',
      },
      {
        title: '学習記録アプリケーション開発',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/learn1.jpg',
        hoverImageUrl: '/ryotaro/learn2.jpg',
        modalId: 'portfolioModal1',
        description: 'プログラミングを勉強し始めてクイズサイトの次に取り組んだのがこの学習記録アプリケーションになります。はじめはHTML,CSS、Javascriptを用いて開発しました。その後PHPやLaravelの勉強を行い、同様のwebアプリケーションの開発も行いました。実際に勉強のモチベーションを上げるなにかがほしかったので自身で作ったアプリケーションを使うことで勉強のモチベーションも爆上がりでした笑',
      },
      {
        title: 'ハッカソンの企画運営',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/hackthon1.jpg',
        hoverImageUrl: '/ryotaro/hackthon2.jpg',
        modalId: 'portfolioModal1',
        description: '私のガクチカはこのハッカソンの企画運営です笑プログラミング学習コミュニティの初代ハッカソン運営として3人のメンバーで取り組みました。0ベースで企画をおこなったこともあり、ハッカソンとしての楽しみに加え、メンバーとの交流を大切にすることを目的として企画しました。無我夢中に運営メンバーで話し合った日々は今でも忘れられません笑睡眠時間も削ってしんどい時間もありましたが終わったときにはコミュニティメンバーから花と寄せ書きをいただき、心から企画してよかったと思えた経験でした。最後に友達から「挑戦することは割のいい賭けだね」と言葉をかけてもらったのですがこの言葉は今でもしんどい時に一歩踏み出す勇気を与えてくれます',
      },
      {
        title: 'ハッカソン優勝',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/win1.jpg',
        hoverImageUrl: '/ryotaro/win2.jpg',
        modalId: 'portfolioModal1',
        description: 'イベント管理アプリケーションの開発をテーマに取り組んだハッカソンで優勝しました！チームメンバーは個性豊かな編成でそれぞれ強みが異なることがいい方向に働いたと記憶しています。各々が得意なタスクに取り組める環境、タスクを任せるという信頼が優勝の決め手でした。優勝後にチームメンバーで京都・大阪旅行に行きました。そこでも各々の個性が存分に発揮され、ハプニングの連続でした笑最終日に東京に帰還できたのは4人中2人…どうしてこうなったのか…笑今ではいい思い出です。',
      },
      {
        title: '3か月間にわたるチーム開発',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/team1.jpg',
        hoverImageUrl: '/ryotaro/team2.jpg',
        modalId: 'portfolioModal1',
        description: '3か月の期間において4人一組で月間70万PVを誇る就活の教科書のコンバージョン率上昇をテーマに取り組んだチーム開発経験。この経験は自分を大きく成長させるきっかけになった。チームメンバーの脱退などのハプニングを乗り越えながらもポモドーロ法を取り入れた積極的なペア開発やタスクの優先順位付けによる徹底管理を行うことでチームの納得するプロダクトを作ることができた。要件定義をはじめとして、実装、テストなど一貫した開発経験が自己成長に大きくつながったと思う。しんどい経験をした自覚はあるがチームメンバーとは強固なつながりが芽生え、いまでは何でも話せる友達である。これからもつながりを大切にしていきたい。唯一の心残りは大学との両立が難しく、大学時代4年間で1つだけ量子力学の「不可」をとってしまったこと…泣',
      },
      {
        title: '初めてのプログラミング経験',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/quizy1.jpg',
        hoverImageUrl: '/ryotaro/quizy2.jpg',
        modalId: 'portfolioModal1',
        description: '大学二年のコロナ拡大の時期に家での時間が増えたこと、先輩からプログラミングの話しを聞いたことをきっかけにプログラミング学習をスタートしました。初めて作ったのがこのクイズサイトのフロントです。HTML,CSS、Javascriptを用いました。コードがフロントとして形になる快感とポチポチしてクイズを遊べることに当時驚きを隠せませんでした。自分が思っていたよりも簡単に作れるのだと感じました笑ちなみに二枚目の写真はbashがカラフルなメカニックな画面でプログラマーっぽくて撮った写真になります。',
      },
      {
        title: '大学院での研究①:表情分析による顧客満足度推定',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/keiolab1.jpg',
        hoverImageUrl: '/ryotaro/keiolab2.png',
        modalId: 'portfolioModal1',
        description: 'プロジェクト研究の一環でソレイユの丘に来場したお客さまを対象に実験する予定です。具体的には来場者にアンケートを取り、アンケート結果に基づいて顧客満足度を推定します。アンケート時に回答者の表情を解析し、そこで得られた笑顔度と満足度の相関を求めたいと考えています。将来的は商業施設などで来場者の顔画像だけで満足度を推定するシステムを構築することを目標としています。',
      },
      {
        title: '大学院での研究②：ウェルビーイングを考慮したレコメンダーシステム',
        category: 'Graphic Design',
        imageUrl: '/ryotaro/recommend1.png',
        hoverImageUrl: '/ryotaro/recommend2.png',
        modalId: 'portfolioModal1',
        description: 'この研究では興味外からのレコメンドに対してウェルビーイングを考慮したシステム設計と評価を行う。レコメンドによるパーソナライズすることがフィルターバブル現象などの社会的な問題を引き起こす中であえて興味外のレコメンドをするシステム構築に関する研究である。日本的な人間の幸せの定義に関する先行研究をもとにシステムにウェルビーイングを落とし込むことに面白みを感じている。私は便利な技術は積極的に利用するが過度な没頭を防ぐことを目的とし、スマホ依存症などの問題解決の寄与に繋げたいと考えている。',
      },

    ];
  
  const StyledFooter = styled('footer')({
    textAlign: 'center',
    padding: '2rem 1rem',
    margin: 'auto',
    color: '#333',
    backgroundColor: '#fff',
  });

  return(
  <StyledMain>

    <Landing id = "section0"sx={{display:{xs:'block',md:'flex'}}}>
      <LandingText>
        <div>
          <Typography variant="h1" sx={{fontSize:{xs:30,md:100}}}>Wellbeing×Computing</Typography>
          <Typography variant="h4" sx={{fontSize:{xs:15,md:30}}}>Creating Digital Solutions for Better Wellbeing</Typography>
          <Button variant="outlined" href="https://www.jn.sfc.keio.ac.jp/" id="view-work" sx={{margin:8} }>
            View My Laboratry
          </Button>
        </div>
      </LandingText>
      <LandingImage sx={{display:{xs:'none',md:'block'}}}/>
    </Landing>

    <Portfolios>
    <Portfoliotitle variant="h2" id="section1">Portfolio</Portfoliotitle>
    <PortfolioText variant="h4">Excellence in Action</PortfolioText>
    <Box   sx={{
      paddingTop: {
        xs: 0,
        sm: 2,
        md: 5,
        lg: 8,
      },
    paddingLeft: {
      xs: 0, 
      sm: 5, 
      md: 20,
      lg: 25,
    },
    paddingRight: {
      xs: 0, 
      sm: 5, 
      md: 20, 
      lg: 25, 
    }
  }}
  color={'#fff'}>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
    {portfolioItems.map((item, index) => (
      <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
        <Portfolio 
          key={index}
          title={item.title}
          category={item.category}
          imageUrl={item.imageUrl}
          hoverImageUrl={item.hoverImageUrl}
          modalId={item.modalId}
          description={item.description}
        />
        </Grid>
      ))}
      </Grid>
      </Box>
      </Portfolios>
      
      <Abouttitle variant="h2" id="section2">ABOUT</Abouttitle>
    <AboutText variant="h4">Get to Know Me</AboutText>
  <AboutPage
      selfPortraits={[
        '/ryotaro/selfphoto1.jpg',
        '/ryotaro/selfphoto2.jpg',
      ]}
      name={{
        kanji: '影嶋亮太朗',
        romaji: 'Ryotaro Kageshima',
      }}
      university={{
        japanese: '慶應義塾大学院政策メディア研究科',
        english: 'Keio University Graduate School of Media and Governance',
      }}
      organization="POSSE一期生・BASS・カフェモダン" 
      description={'大学院では「ウェルビーイングのためのコンピューティング」「ユビキタスコンピューティング」「デジタルウェルビーイング」に関して研究しています。プログラミングではこれまでHTML,CSS,Javascript,Typescript,React,PHP,Doker,SQL(MySQL),laravel, C++,C#,python,djangoなどを用いて活動してきました。過去にプログラミングのハッカソンの企画・運営をしたり、参加者として優勝した経験もあります。他にも3か月に及ぶチーム開発も経験しました。人格の勉強もしており、傾聴の大切さやインサイドアウトなど「7つの習慣」をベースに学習しています。ちなみに学部時代は「超伝導」に関する研究を行っており、C++をもちいたシミュレーションと平行して試料を作成し、ボルテックスラチェッド効果の測定を行っておりました。'}  
      />


    <WorkTitle variant="h2" id="section3"sx={{paddingTop:{xs: '90%',md: '5%'},fontSize:{xs:23,md:45,}}}>Education And Work History</WorkTitle>
    <WorkText variant="h4"sx={{fontSize:{xs:18,md:35,}}}>Know My Journey</WorkText>
     <Work title={''} subtitle={''} timelineItems={[{
      image:'/ryotaro/jrhigh.jpg',
  date:'2012.4-2015.3',
  subheading:'富士市立元吉原中学校',
  text:'中学時代は生徒会長や生徒会副会長、林間学校代表や修学旅行代表などありとあやゆる代表を経験してきた。そのような経験から協調力や向上心、人をサポートする力が養われたように思われる。',},
  {image:'/ryotaro/highschool.JPG',
  date:'2015.4-2018.3',
  subheading:'静岡県立富士高等学校',
  text:'思い返すと高校時代は部活動に打ち込んだ3年間でした。長い間何かに打ち込む楽しさやチームワークの重要性を学ぶことができました。',},
  {image:'/ryotaro/chiba.jpg',
  date:'2019.4-2023.3',
  subheading:'千葉大学工学部総合工学科物質科学コース',
  text:'物理と化学の両方を学び、超伝導に関する研究を行っていました。プログラミング学習コミュニティやバドミントンサークル、カフェサークルなど人との出会いを大切にし、挑戦し続けた4年間でした。',},
  {image:'/ryotaro/insight.png',
  date:'2021.2',
  subheading:'InsightLab',
  text:'powerBIをもちいた実際のデータ分析とその結果を用いた経営回復のための経営プランのプレゼンテーションをクライアントに向けて行いました。初めてインターンシップに参加しました。',},
  {image:'/ryotaro/dreamarts.png',
  date:'2021.10-2022.3',
  subheading:'DreamArts,Inc',
  text:'インターンでは実際にチームの一員としてアジャイル開発を行いました。ユーザー約50万人も抱える製品の新機能考案・実装に携わりました。',},
  {image:'/ryotaro/cyber.png',
  date:'2021.12',
  subheading:'CyberAgent, Inc',
  text:'Reactを用いたwebapp開発の短期インターンに参加させていただきました。成果物をプレゼンテーションを用いて発表しました',},
  {image:'/ryotaro/enjapan7.png',
  date:'2022.3',
  subheading:'En・Japan,Inc',
  text:'python・Djangoを用いた転職者のためのアプリケーション開発を行いました。メンターさんについていただき、実践的なアドバイスを頂きました。',},
  {image:'/ryotaro/doctor.png',
  date:'2022.6-2023.6',
  subheading:'BeDoctorConsulting,Inc',
  text:'開発チームの一員として開発に携わりました。ほかにも病院とのMTGやヒヤリングなど上流のお仕事にも携わり、幅広く活動しました。',},
  {image:'/ryotaro/dip.png',
  date:'2022.10-2023.2',
  subheading:'Dip,Inc',
  text:'RPA化を望む部署に対して直接、要望をヒヤリングし、業務改善を提案します。PRAエンジニアとして業務の自動化を促進させていました。',},
  {image:'/ryotaro/keio.jpg',
  date:'2023.4-現在',
  subheading:'慶應義塾大学院政策・メディア研究科サイバーインフォマティクス専攻',
  text:'人々の生活を便利にするIT技術は時として人を過度に没頭させ幸せを損なうことがある。適切なテクノロジーの利用に関して立案・実装・評価に至る一貫した研究に取り組みたいと思い、入学した。',},

  ]}/>
     <ContactTitle variant="h2" id="section4">Contact</ContactTitle>
     <ContactText variant="h4">Connect With Me</ContactText>
     <Contact/>

    <StyledFooter>
      <Typography variant="h4">Thank you for Visiting</Typography>
      <Typography>Email: <strong>kageshima23@gmail.com</strong></Typography>
      <Typography>Phone: <strong>(090) 6376-2812</strong></Typography>
    </StyledFooter>
  </StyledMain>
  );
};

export default Home;

