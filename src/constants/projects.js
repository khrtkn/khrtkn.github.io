const talkativeMuseumReferences = [
  'Hooper-Greenhill, E. 2006. Studying visitors. In S. Macdonald (Ed.), A Companion to Museum Studies. Blackwell, 362-376.',
  'Andre, L., Durksen, T., and Volman, M. L. 2017. Museums as avenues of learning for children: a decade of research. Learning Environments Research 20, 47-76. https://doi.org/10.1007/s10984-016-9222-9',
  'Kupiec, K., Malmberg, L.-E., and Mathers, S. 2023. The Effectiveness of Museum Intervention on Parent-Child Conversations: A Meta-Analysis. Visitor Studies 26(1), 82-101.',
  'Yates, E., Szenasi, J., Smedley, A., Glynn, K., and Hemmings, M. 2022. Children as experiencers: Increasing engagement, participation and inclusion for young children in the museum. Childhood 29(1), 58-74. https://doi.org/10.1177/09075682211064429',
  'Gerven, V. D., Land-Zandstra, A., and Damsma, W. 2018. Authenticity matters: Children look beyond appearances in their appreciation of museum objects. International Journal of Science Education, Part B 8(4), 325-339. https://doi.org/10.1080/21548455.2018.1497218',
  'Azuma, R., Baillot, Y., Behringer, R., Feiner, S., Julier, S., and MacIntyre, B. 2001. Recent Advances in Augmented Reality. IEEE Computer Graphics and Applications 21(6), 34-47. https://doi.org/10.1109/38.963459',
  'Perry, S. E., Roussou, M., Mirashrafi, S., Katifori, A., and McKinney, S. 2019. Shared digital experiences supporting collaborative meaning-making at heritage sites.',
  'Katifori, A., Perry, S., Vayanou, M., Pujol, L., Chrysanthi, A., Kourtis, V., and Ioannidis, Y. 2016. Cultivating mobile-mediated social interaction in the museum: towards group-based digital storytelling experiences. Museums and the Web 2016.',
  'Moorhouse, N., tom Dieck, M. C., and Jung, T. 2019. An experiential view to children learning in museums with augmented reality. Museum Management and Curatorship 34(4), 402-418. https://doi.org/10.1080/09647775.2019.1578991',
  'Koumpouros, Y. 2024. Revealing the true potential and prospects of augmented reality in education. Smart Learning Environments 11. https://doi.org/10.1186/s40561-023-00288-0',
  'Radu, I., Joy, T., Bowman, Y., Bott, I., and Schneider, B. 2021. A survey of needs and features for augmented reality collaborations in collocated spaces. Proceedings of the ACM on Human-Computer Interaction 5(CSCW1), Article 169. https://doi.org/10.1145/3449243',
  'Queiroz, A. C. M., Tori, R., Nascimento, A. M., and Leme, M. I. da S. 2018. Augmented and virtual reality in education: the role of Brazilian research groups. 20th Symposium on Virtual and Augmented Reality, 170-175. https://doi.org/10.1109/SVR.2018.00034',
  'Hirsh-Pasek, K., and Golinkoff, R. M. 2008. Why Play = Learning. Encyclopedia on Early Childhood Development.',
  'Behrendt, M., and Franklin, T. 2014. A Review of Research on School Field Trips and Their Value in Education. International Journal of Environmental and Science Education 9, 235-245. https://doi.org/10.12973/ijese.2014.213a',
  'Katifori, A., Kourtis, V., Perry, S., Pujol, L., Vayanou, M., and Chrysanthi, A. 2016. Cultivating mobile mediated social interaction in the museum: Towards group-based digital storytelling experiences. Museums and the Web 2016.',
  'Roussou, M., and Katifori, A. 2018. Flow, Staging, Wayfinding, Personalization: Evaluating User Experience with Mobile Museum Narratives. Multimodal Technologies and Interaction 2(2), 32. https://doi.org/10.3390/mti2020032',
  'Breuss-Schneeweis, P. 2016. The speaking celt: augmented reality avatars guide through a museum - case study. UbiComp 2016 Adjunct, 1484-1491. https://doi.org/10.1145/2968219.2974044',
  'Olim, S. M. C., Nisi, V., and Rubegni, E. 2022. Periodic Fable Augmenting Chemistry with Technology, Characters and Storytelling. IDC 2022, 123-136. https://doi.org/10.1145/3501712.3534092',
  'Perry, S., Roussou, M., Mirashrafi, S., Katifori, A., and McKinney, S. 2019. Shared Digital Experiences Supporting Collaborative Meaning-Making at Heritage Sites.',
  'Polinsky, N., Andrus, B., Horn, M., and Uttal, D. 2021. Symbolic Relations in Collaborative Coding: How Children and Parents Map Across Symbol Systems While Coding Robots. IDC 2021, 294-304. https://doi.org/10.1145/3459990.3460713',
  'Bower, M., Howe, C., McCredie, N., Robinson, A., and Grover, D. 2014. Augmented reality in Education - Cases, places, and potentials. Educational Media International 51. https://doi.org/10.1080/09523987.2014.889400',
  'Dunleavy, M., and Dede, C. 2014. Augmented Reality Teaching and Learning. Handbook of Research on Educational Communications and Technology, 735-745. https://doi.org/10.1007/978-1-4614-3185-5_59',
  'Klopfer, E., and Squire, K. 2008. Environmental Detectives - the development of an augmented reality platform for environmental simulations. Educational Technology Research and Development 56, 203-228. https://doi.org/10.1007/s11423-007-9037-6',
  'Morrison, A., Oulasvirta, A., Peltonen, P., Lemmela, S., Jacucci, G., Reitmayr, G., Nasanen, J., and Juustila, A. 2009. Like bees around the hive: a comparative study of a mobile augmented reality map. CHI 2009, 1889-1898. https://doi.org/10.1145/1518701.1518991',
];

const talkativeMuseumReferencesHtml = `<ol class="reference-list">${talkativeMuseumReferences
  .map((reference) => `<li>${reference}</li>`)
  .join('')}</ol>`;

export const projects = [
  {
    slug: 'modoru-mirai-ya',
    title: '未来屋書店の店舗サービスおよびアプリケーションの改善提案',
    titleshort: '未来屋書店UXリサーチ',
    timeline: '2024.11 - 2024.12',
    year: '2024',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    imageHeader: ['/assets/Miraiya/imageHeader.jpeg'],
    imageBanner: ['/assets/Miraiya/imageBanner.jpeg'],

    sections: [
      {
        heading: '作品制作の目的・意図',
        body: '本プロジェクトは、未来屋書店の新サービス創造に向けて、体系的なUXリサーチを実践し、そこから得られたインサイトを基にサービスコンセプトを策定することを目指しました。特に、定量・定性の両面からユーザー理解を深めることで、表層的なニーズだけでなく、潜在的な期待や不安、行動パターンを明らかにすることを重視しています。リサーチでは、イオンモール来店者を対象としたアンケート調査（8名）と半構造化インタビュー（4名）を実施。「家族での買い物」という文脈における書店利用の実態や、「ついで利用」と「目的利用」の行動パターンの違いなど、これまで明確になっていなかったユーザーの利用文脈を掘り下げました。これらの知見を競合分析と組み合わせることで、未来屋書店ならではの新しい価値提供の可能性を探求しています。',
        images: ['/assets/Miraiya/image1.jpeg']
      },
      {
        heading: '課題',
        body: 'UXリサーチを通じて構築したユーザーのメンタルモデルから、書店利用における5つの重要なフェーズ（利用する、探す、判断する、読む、交流する）が明らかになりました。これらのフェーズごとにユーザーの行動と期待を分析し、狩野モデルを用いて課題を構造化しました。ベースとなる「当たり前品質」では、アプリのUX改善が急務であることが判明。レビューデータの分析から、基本機能の使いづらさがユーザー満足度を大きく低下させている実態が浮かび上がりました。インタビューからは「時間がない中での選書」「購入後の後悔」といった不安要素も特定され、これらへの対応が必要不可欠だと分かりました。「一元的品質」では、イオンモールのロケーション特性を活かしきれていない課題が明確になりました。日常の買い物動線に組み込まれているにもかかわらず、その利便性を十分に活用できていません。また顧客体験マップからは、「立ち読みの時間的制約」が購買の大きな障壁となっている実態も判明しました。さらに「魅力的品質」においては、家族での来店という特徴を活かした体験価値の創出が不足していることが分かりました。特に、読書を通じた家族間のコミュニケーションへの潜在的なニーズが、インタビューから強く示唆されています。',
        images: ['/assets/Miraiya/image2.jpeg', '/assets/Miraiya/image3.jpeg', '/assets/Miraiya/image4.jpeg']
      },
      {
        heading: '成果',
        body: 'これらのリサーチ発見を統合し、新サービス「PICK & GO↗️」のコンセプトを策定しました。コンセプトの核となる「試し読み時間の販売」は、ユーザーの行動観察から得られた「じっくり選びたいが時間がない」というジレンマを解決するものです。カスタマージャーニーマップの分析から、モール来店から購買判断までの動線を最適化し、アプリを通じた予約・受け取り・返却の自動化により、既存の買い物行動との自然な接続を実現します。また、ペルソナ分析から特定された「家族との共有」ニーズに応えるため、読書時間のギフト機能や共有機能を実装します。実現に向けては、初期のユーザビリティ改善から段階的に機能を拡充していく実装計画を策定。各フェーズでの定量・定性指標を設定し、継続的な改善サイクルを回していく方針です。',
        images: ['/assets/Miraiya/image5.jpeg', '/assets/Miraiya/image6.jpeg', '/assets/Miraiya/image7.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料(PDF)はこちら　＞',
        href: 'https://drive.google.com/file/d/1pQWzZJvnoIajPiHQl70PiYC4ru6TRx-8/view?usp=sharing'
      }
    ]
  },
  {
    slug: 'TalkingMuseum',
    title: '生きた展示と、\n会話ができる博物館',
    titleshort: 'おしゃべりミュージアム',
    timeline: '2023.5 - 2024.1',
    year: '2024',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    discipline: 'HCI, XR, Interaction Design',
    imageHeader: ['/assets/TalkingMuseum/imageHeader.jpeg'],
    imageBanner: ['/assets/TalkingMuseum/imageBanner.jpeg'],
    videoEmbeds: [
      {
        title: 'Talkative Museum demo',
        src: 'https://www.youtube.com/embed/QBvE1VTsdJA'
      }
    ],
    sections: [
      {
        heading: '描いた未来',
        body: [
          '物理世界と仮想世界の境目が曖昧になったとき、博物館はどのような体験になるのだろうか？',
          'これは、AR技術を博物館に適応する手法を模索する中で、生まれた問い。そんな問いに対し、修士研究の中の1つのプロジェクトの中で、構成論的に模索した結果、生まれた作品です。'
        ],
        images: [
          '/assets/TalkingMuseum/legacy/ttm_mock.jpg',
          '/assets/TalkingMuseum/legacy/ttm_charm.jpg',
          '/assets/TalkingMuseum/legacy/ttm_main.jpg'
        ],
        imageMode: 'natural'
      },
      {
        heading: 'パーソナルすぎるデバイスたち',
        bodyHtml: '博物館の伝統的な展示方法では、貴重な展示物の保護が優先され、<strong>来館者との直接的な相互作用が制限</strong>されてきた。このアプローチは、特に子供たちの興味を引くことを難しくし、近年のインタラクティブな体験への需要増加に十分に応えられていない。<br><br>これらの課題に対応するため、多くの博物館が拡張現実（AR）技術の導入を進めている。AR技術は、モバイル端末を通じて展示物にデジタル情報を重ねることで、より理解しやすく、アクセスしやすい展示を実現している。この技術により、<strong>来館者は展示物とより深く関わる</strong>ことができるようになっている。<br><br><strong>しかし</strong>、AR技術の導入は新たな課題も生み出している。パーソナルな特性を持つモバイル端末の使用により、<strong>来館者同士の社会的相互作用が阻害される</strong>可能性がある。さらに、開発される体験の多くが個人利用を前提としており、集団での体験を考慮していないものが多いことが現状。<br><br>この状況は、博物館体験における重要な側面を見落としている可能性がある。来館者は情報、共有された信念、意味の構築のために互いを利用する。グループ内での会話/協働を促進することは、博物館での利用者の学習体験を大きく向上させる可能性を持つ。<br><br>したがって、AR技術がもたらす個人と展示品との相互作用の強化と、来館者同士の社会的相互作用のバランスを慎重に考慮する必要がある。博物館本来の社会的学習の場としての機能を強化することができる。<strong>展示とのインタラクションと社会的相互作用のバランス</strong>を取ることで、より豊かで効果的な博物館体験が見えてくるのではないだろうか。',
        images: [
          '/assets/TalkingMuseum/legacy/ttm_bg2.jpg',
          '/assets/TalkingMuseum/legacy/ttm_bg.jpg'
        ],
        imageMode: 'natural'
      },
      {
        heading: 'オセアニア展示',
        bodyHtml: 'フィールドは、<a href="https://www.minpaku.ac.jp/" target="_blank" rel="noreferrer">国立民族学博物館</a>にご協力いただき、その中のオセアニア展示とした。オセアニアカヌーを中心に、仮面がずらりと並ぶ素敵な展示空間。<br><br>博物館体験は、興味を持ち、主体的に情報を収集し、知識を結びつけ、他の人に共有するプロセスだと思う。この過程においてARをいつ、どのように使うか考えた時、観察の段階によってARの提示情報を切り替えることで、協力観察を促す方法を考えた。3つの段階に分けて定義した：<br><br>興味獲得: 「没入AR」 → 探索: 「補完的AR」 → 知識収集: 「非没入AR」<br><br>ヒトは多様であるため、集団観察を促す場合には、この多様性をうまく使えば活かしたいと考えた。そこで、興味の違い、身長の差、年齢の違いなどから、個々が観察する場所が異なることを活かし、探索体験に反映させた。',
        images: ['/assets/TalkingMuseum/legacy/ttm_bg5.jpg'],
        imageMode: 'natural'
      },
      {
        heading: '制作の背景・体制',
        body: '本作品は、親子と展示物の協働的な関わりを促すモバイルARガイドシステムとして制作しました。論文「Talkative Museum: Augmented Reality Interactive Museum Guide System Towards Collaborative Child-Parent-Specimen Interaction」として、Kihiro Tokuno、Fusako Kusunoki、Shigenori Inagaki、Hiroshi Mizoguchi により IDC 2024 で発表されています。プロトタイプでは、展示物との対話、親子間の探索、会話のきっかけを同時に生み出すことを重視しました。',
        images: ['/assets/TalkingMuseum/image1.jpeg', '/assets/TalkingMuseum/image2.jpeg']
      },
      {
        heading: '評価',
        body: '国立民族学博物館での予備的なユーザーテストでは、アプリの使いやすさや、親子での協働的な鑑賞体験に対して肯定的な反応が得られました。質問紙と観察データの分析から、プロトタイプが来館者の関与、協働学習、新しい知識の発見を促す可能性が示されています。',
        images: [
          '/assets/TalkingMuseum/image3.jpeg',
          '/assets/TalkingMuseum/image4.jpeg',
          '/assets/TalkingMuseum/image5.jpeg',
          '/assets/TalkingMuseum/image6.jpeg',
          '/assets/TalkingMuseum/image7.jpeg',
          '/assets/TalkingMuseum/image8.jpeg',
          '/assets/TalkingMuseum/image9.jpeg',
          '/assets/TalkingMuseum/image10.jpeg'
        ]
      },
      {
        heading: '参考文献',
        bodyHtml: talkativeMuseumReferencesHtml
      }
    ],
    links: [
      { text: '詳細資料(PDF)はこちら　＞', href: 'https://drive.google.com/file/d/1mf3qXGPMJtWUCAJIxdM5Yxafjz6Q2YE7/view?usp=sharing' },
      { text: '出版された論文はこちら　＞', href: 'https://dl.acm.org/doi/10.1145/3628516.3659389' }
    ]
  },
  {
    slug: 'listen-to-your-neighbors',
    title: '微生物の音を、\n聴き分ける実験',
    titleshort: 'Listen to Your Neighbors',
    timeline: '2024',
    year: '2024',
    team: 'ssmtat、大平麻以、佐野風史、志智友海、Tokuno Kihiro、なかのかな、平松守瑠',
    tools: 'JavaScript, Web Audio API',
    discipline: 'Sound Design, Data Sonification, Bio Art',
    imageHeader: ['/assets/Neighbors/imageHeader.jpeg'],
    imageBanner: ['/assets/Neighbors/imageBanner.jpeg'],
    sections: [
      {
        heading: 'コンセプト',
        body: [
          '本作品では、それぞれの空間に住まう最も数が多い微生物に着目し、その特徴を人が聞くことができる音に変換することで、わたしたちと同じ空間を生きる小さな「命」の存在を実感できるようにすることを試みました。微生物の特徴を音に変換する際に用いたのが、各微生物に与えられた分類学上の命名法です。生物は「界」「門」「綱」「目」「科」「属」「種」という階級によって分類され、この分類階級に音の性質を対応させることで、各微生物固有の音を生成しました。',
          'この実験では、異なる環境を表現した音を聴き、それらが同じ環境からのものか、異なる環境からのものかを判断します。聴覚を通じて、目には見えない環境の違いに触れるための実験です。'
        ],
        images: ['/assets/Neighbors/image1.jpeg', '/assets/Neighbors/image2.jpeg']
      },
      {
        heading: '採集場所について',
        body: [
          '「Listen to Your Neighbors」で使用されている生物データは、CCBTとその周辺で採取されました。「右奥の部屋の床のカーペット」「ステンレスのゴミ箱の蓋の裏」「階段のレンガ」「会場入り口の壁紙」「受付のぬいぐるみ」「中庭の植木の葉」を、専用の綿棒でそれぞれ3分間拭い、得られたサンプルを解析サービスを通じて遺伝子情報に変換しました。',
          'それぞれの環境で見つかった微生物の種類や数は大きく異なっていました。実験で聴く音は、これらの環境に存在する微生物のデータを音に変換したものです。各環境には特有の「音の特徴」があります。'
        ],
        images: ['/assets/Neighbors/image3.jpeg', '/assets/Neighbors/image4.jpeg']
      },
      {
        heading: 'データと音の変換方法',
        body: [
          '「綱」と「属」にインデックスを付与し、調査された微生物を二次元ベクトルの形式で表示しました。x値（属）を音のピッチに、y値（綱）を音のエフェクトの種類にマッピングしました。これにより、同じピッチで異なるエフェクトの音や、同じエフェクトで異なるピッチの音が生まれます。',
          '「綱」は進化的なルーツの違いを示しており、これらをエフェクトの種類として表現することで、生物の進化的な「距離感」や構造的な違いを音で表現することが可能となりました。また、DNA配列を読み取ることができた量を示す「リード数」を、音の重なりとして反映させています。'
        ],
        images: ['/assets/Neighbors/image5.jpeg', '/assets/Neighbors/image6.jpeg']
      }
    ],
    links: [
      { text: '音声環境識別実験はこちら　＞', href: '/experiment/' }
    ]
  },
  {
    slug: 'interactive-museum',
    title: '展示の記憶を、\nあつめて学ぶ体験',
    titleshort: 'Memorium',
    timeline: '2023.10 - 2024.1',
    year: '2023',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    discipline: 'HCI, XR, Interaction Design',
    imageHeader: ['/assets/Memorium/imageHeader.jpeg'],
    imageBanner: ['/assets/Memorium/imageBanner.jpeg'],


    sections: [
      {
        heading: '作品制作の目的・意図',
        body: '本作品は修士研究「博物館におけるこどもを含む社会集団のための協働学習体験デザイン」の一環として、来館者に協働的な学習を促すためのAR体験デザインを行いました。国立民族学博物館の研究者である菊澤律子先生、言語学者である巽智子先生から課題ヒアリングを行い、コンセプトを定めた後にUXデザイン、UIデザイン、ソフトウェア開発、ワークショップ設計を1人で担当しました。従来の静的な展示解説から脱却し、展示物との直接的な対話を可能にするARシステムを構築することで、特に子どもたちの知的好奇心を刺激する革新的な学習環境の創出を目指しました。',
        images: ['/assets/Memorium/image1.jpeg']
      },
      {
        heading: '課題',
        body: '近年、モバイル端末を用いたデジタル支援の博物館への導入が進んでいますが、人と人との相互作用を妨げる側面も指摘されています。特に、子どもを含む社会集団での協働学習において、デジタル機器の活用と人との交流のバランスが課題となっていました。また、大阪にある順路歩行距離5kmの国立民族学博物館では、12,000点にも及ぶ展示物の中から、オセアニアの人々の発達した航海術や農耕技術など、工夫を凝らした生活様式を効果的に伝える新しい展示手法が求められていました。',
        images: ['/assets/Memorium/image2.jpeg']
      },
      {
        heading: '成果',
        body: 'ARを活用した対話型展示システムの導入により、来館者の体験価値を大きく向上させることができました。展示物との直接的な対話を通じて、来館者の興味関心に応じた柔軟な情報提供が可能となり、特に子どもたちの自発的な学習意欲を高める効果が確認されました。また、デジタルチャームという形で体験を物質化することで、来館後も継続的な学習効果を促進する仕組みを確立しました。実証実験では、参加者の93%が「体験を通じて新しい発見があった」と回答し、展示物への理解度が従来比で約40%向上するという具体的な成果が得られています。',
        images: ['/assets/Memorium/image3.jpeg', '/assets/Memorium/image4.jpeg', '/assets/Memorium/image5.jpeg', '/assets/Memorium/image6.jpeg', '/assets/Memorium/image7.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料（PDF）　＞',
        href: 'https://drive.google.com/file/d/1NwjmYMAtKPd8cXL7sBlSZzSs-pS4uZIk/view?usp=sharing'
      },
      {
        text: '出版された論文　＞',
        href: 'https://dl.acm.org/doi/10.1007/978-981-99-8248-6_19'
      }
    ]
  },

  {
    slug: 'lets-speak-with-hands',
    title: 'スマホを、\n持ったまま手話学習',
    titleshort: 'Let\'s Speak with Hands',
    timeline: '2022.10 - 2022.12',
    year: '2022',
    team: '徳野稀太',
    tools: 'Swift, CreateML',
    discipline: 'HCI, Interaction Design, Machine Learning',
    imageHeader: ['/assets/Hands/imageHeader.jpeg'],
    imageBanner: ['/assets/Hands/imageBanner.jpeg'],


    sections: [
      {
        heading: '作品制作の目的・意図',
        body: 'スマートフォンを活用した手話学習体験「Let\'s Speak with Hands」は、従来の手話教育における時間的・空間的制約を解消し、誰もが手軽に手話を学べる環境の創出を目指しています。筑波技術大学の加藤伸子教授との綿密な協議を経て、特に初学者に焦点を当てた学習体験を設計しました。従来の対面式手話教室が抱える高コストや場所的制約という課題に対し、スマートフォンという身近なデバイスを活用することで、時間や場所を選ばない学習環境を実現。「いつでも、どこでも、手軽に」という理念のもと、手話学習のバリアを大きく低減するためのPoCを制作しました。',
        images: ['/assets/Hands/image1.jpeg']
      },
      {
        heading: '課題',
        body: '手話学習における最大の課題は、2次元の学習教材から3次元の動作を正確に理解し再現することの困難さにあります。従来の動画や図解による学習方法では、立体的な手の動きを平面的な情報から理解しなければならず、その過程で多くの誤認識が発生します。さらに深刻な問題として、誤った動作の「化石化」があります。独学環境では自身の間違いに気づく機会が限られているため、不適切な動作が習慣化してしまい、後の修正が極めて困難になります。また、既存の高度なデプスセンサーを用いた学習システムは、高額な初期投資が必要となり、気軽な学習開始の障壁となっています。',
        images: ['/assets/Hands/image2.jpeg']
      },
      {
        heading: '手法',
        body: '「Let\'s Speak with Hands」は、CreateMLを活用した機械学習モデルとiPhoneの加速度センサーの統合にあります。システムの処理フローは以下の通りです：まず、加速度センサーから取得した3軸（X,Y,Z）の時系列データを40msごとにサンプリングし、これを基に動作の特徴量を抽出します。この時系列データは、手話表現特有の動きパターンを捉えるために、適切な時間窓でセグメント化されます。CreateMLモデルは、手話話者から収集した大量の訓練データを用いて、各手話表現に特徴的な加速度パターンを学習します。特に、動作の速さ、大きさ、方向性といった要素を総合的に判断し、高精度な動作認識を実現しています。モデルの出力は、リアルタイムでスコアリングされ、ユーザーにフィードバックとして提供されます。また、誤認識を防ぐために、ノイズ除去やデータの正規化といった前処理も実装されています。',
        images: ['/assets/Hands/image3.jpeg', '/assets/Hands/image4.jpeg']
      },
      {
        heading: '成果',
        body: '「Let\'s Speak with Hands」は、スマートフォンの加速度センサーを活用することで、従来のカメラベースのシステムと比較して大幅なコスト削減を実現しました。特に注目すべきは、手話話者の遊び「ドラえもん手話」からインスピレーションを得た革新的な学習アプローチです。握り拳で手話動作を行い単語を当てるという遊びの要素を取り入れることで、楽しみながら正確な動作を習得できる環境を構築しました。リアルタイムでの動作フィードバックと点数評価システムにより、学習者は自身の進捗を客観的に把握でき、効率的な上達が可能となっています。',
        images: ['/assets/Hands/image5.jpeg', '/assets/Hands/image6.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料(PDF)はこちら　＞',
        href: 'https://drive.google.com/file/d/1GMquJDvNjyWwFCgseg4VpRj1qjMQn2rR/view?usp=sharing'
      }
    ]
  },
  {
    slug: 'finca',
    title: '違いを楽しみ、\n進化を学ぶ体験',
    titleshort: 'FINCA',
    timeline: '2023.10 - 2024.1',
    year: '2023',
    team: '徳野稀太',
    tools: 'Unity, Figma',
    discipline: 'HCI, XR, Interaction Design',
    imageHeader: ['/assets/Finca/imageHeader.jpeg'],
    imageBanner: ['/assets/Finca/imageBanner.jpeg'],

    sections: [
      {
        heading: '制作の目的・意図',
        body: '博物館における進化論学習において、特に子どもたちが直感的に理解できる体験の不足が課題となっています。国立科学博物館との協働のもと、SharedAR技術を活用した新しい学習体験「FINCA」を開発しました。従来の静的な展示物では伝えきれなかった、生物の進化プロセスをインタラクティブに体験できる環境を構築することで、複数人での協働的な学習を促進し、進化論への理解を深めることを目指しています。',
        images: ['/assets/Finca/image1.jpeg']
      },
      {
        heading: '課題',
        body: '従来の博物館における進化論学習では、精巧な木製模型を用いた展示が一般的でしたが、壊れやすさから実際に触れることができず、また生態系や生息環境といった重要な文脈情報が十分に伝わりにくいという問題がありました。特に子どもたちにとって、静的な展示物だけでは進化のダイナミックなプロセスを理解することが困難でした。また、個人での観察に留まりがちで、他者との知見共有や協働的な学びの機会が限られていたことも、学習効果を制限する要因となっていました。',
        images: ['/assets/Finca/image2.jpeg']
      },
      {
        heading: '成果',
        body: 'FINCAは、実物の環境キットとAR技術を組み合わせることで、ダーウィンフィンチの進化を体験的に学ぶことを可能にしました。複数のタブレット端末を用いた共有AR体験により、参加者は餌やりなどのインタラクションを通じて鳥の形態変化を観察できます。実施したワークショップでは、51名の参加者の80.4%が12歳以下の子どもたちで、特に9歳以上の参加者からは協働学習に関して高い評価を得ました。この結果は、AR技術を活用した体験型学習の有効性を示すとともに、年齢に応じた学習デザインの重要性も明らかにしました。',
        images: ['/assets/Finca/image3.jpeg', '/assets/Finca/image4.jpeg', '/assets/Finca/image5.jpeg', '/assets/Finca/image6.jpeg', '/assets/Finca/image7.jpeg']
      }
    ],
    links: [
      {
        text: '詳細資料(PDF)はこちら　＞',
        href: 'https://drive.google.com/file/d/1KMSqPaeKYqYsOqw5hXvDFmNBp5gImDZb/view?usp=sharing'
      }
    ]
  }
];
