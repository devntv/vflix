export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
  
    /* Series
      ============================================ */
    // documentaries
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Tiger King',
      description: 'Một cuộc khám phá về chăn nuôi mèo lớn và thế giới ngầm kỳ lạ của nó, với những nhân vật lập dị.',
      genre: 'documentaries',
      maturity: '18',
      slug: 'tiger-king',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Amanda Knox',
      description: 'Amanda Marie Knox là một phụ nữ Mỹ đã ở gần 4 năm trong nhà tù ở Ý.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'amanda-knox',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Citizenfour',
      description:
        'Citizenfour là một bộ documentaries năm 2014 của đạo diễn Laura Poitras, liên quan đến Edward Snowden và vụ bê bối gián điệp của NSA.',
      genre: 'documentaries',
      maturity: '12',
      slug: 'citizenfour',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Super Size Me',
      description:
        "Thử nghiệm xã hội của đạo diễn Morgan Spurlock trong lĩnh vực ẩm thực thức ăn nhanh cho thấy anh ta đang cố gắng duy nhất chỉ ăn thức ăn từ McDonalds",
      genre: 'documentaries',
      maturity: '12',
      slug: 'super-size-me',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Man on Wire',
      description:
        "Nhà làm phim James Marsh tái hiện một cách xuất sắc màn đóng thế liều mạng của Philippe Petit năm 1974 đi trên dây ngang qua Tòa tháp đôi.",
      genre: 'documentaries',
      maturity: '12',
      slug: 'man-on-wire',
    });
  
    // Comedies
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Office',
      description:
        'Một nhóm nhân viên văn phòng nhẹ nhàng trải qua những hành động vui nhộn tại Scranton, Pennsylvania, chi nhánh của Công ty Giấy Dunder Mifflin.',
      genre: 'comedies',
      maturity: '15',
      slug: 'the-office',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arrested Development',
      description:
        'Gia đình Bluth, từng là một tên tuổi nổi bật trong ngành kinh doanh, mất tất cả sau khi tộc trưởng bị kết án vì tội lừa đảo.',
      genre: 'comedies',
      maturity: '15',
      slug: 'arrested-development',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Curb Your Enthusiasm',
      description:
        'Larry David, một nhà văn và nhà sản xuất truyền hình nổi tiếng, vướng vào nhiều hành vi sai trái khác nhau với bạn bè và đồng nghiệp nổi tiếng của mình ở Los Angeles.',
      genre: 'comedies',
      maturity: '15',
      slug: 'curb-your-enthusiasm',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Family Guy',
      description:
        'Peter Griffin và gia đình gồm hai thiếu niên, một chú chó thông minh, một đứa bé quỷ quái và vợ của anh ta thấy mình trong một số tình huống vui nhộn nhất.',
      genre: 'comedies',
      maturity: '15',
      slug: 'family-guy',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'South Park',
      description:
        'Bốn cậu bé đang đi học, Stan Marsh, Kyle Broflovski, Eric Cartman và Kenny McCormick, sống ở South Park bắt đầu vào nhiều cuộc phiêu lưu khác nhau.',
      genre: 'comedies',
      maturity: '15',
      slug: 'south-park',
    });
  
    // children
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Peppa Pig',
      description:
        'Peppa, một chú lợn mầm non đang đi học, tham gia nhiều hoạt động năng nổ. Cô ấy học điều gì đó mới mỗi ngày và có rất nhiều niềm vui với gia đình và bạn bè của cô ấy.',
      genre: 'children',
      maturity: '0',
      slug: 'peppa-pig',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Dora The Explorer',
      description:
        'Dora, một cô bé bảy tuổi gốc Mỹ Latinh, tham gia vào nhiều cuộc phiêu lưu trong vùng hoang dã cùng với người bạn Boots, một con khỉ và nhiều công cụ hữu ích và thú vị.',
      genre: 'children',
      maturity: '0',
      slug: 'dora-the-explorer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'PAW Patrol',
      description:
        'Sáu chú chó con dũng cảm, được cầm đầu bởi một cậu bé 10 tuổi am hiểu công nghệ, Ryder, cùng nhau hợp tác để hoàn thành các nhiệm vụ giải cứu cấp cao để bảo vệ các cư dân của cộng đồng Adventure Bay.',
      genre: 'children',
      maturity: '0',
      slug: 'paw-patrol',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Arthur',
      description:
        'Arthur Read thể hiện cho children cách đối mặt với những tổn thương và thử thách thời thơ ấu như bài tập về nhà, giáo viên và những kẻ bắt nạt.',
      genre: 'children',
      maturity: '0',
      slug: 'arthur',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'SpongeBob',
      description:
        'Một loài bọt biển màu vàng có tên là SpongeBob SquarePants sống ở thành phố Bikini Bottom sâu trong Thái Bình Dương. ',
      genre: 'children',
      maturity: '0',
      slug: 'spongebob',
    });
  
    // crime
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Making a Murderer',
      description:
        'Được miễn tội sau gần hai thập kỷ ngồi tù vì crime mà anh ta không phạm phải, Steven Avery đã đệ đơn kiện Quận Manitowoc, Wis., Và một số cá nhân liên quan đến vụ bắt giữ anh ta.',
      genre: 'crime',
      maturity: '18',
      slug: 'making-a-murderer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Long Shot',
      description:
        'Một người đàn ông vô tội bị buộc tội giết người, dẫn luật sư của anh ta vào một cuộc rượt đuổi hoang dã để xác nhận bằng chứng ngoại phạm của anh ta bằng cách sử dụng cảnh quay thô từ một chương trình truyền hình.',
      genre: 'crime',
      maturity: '18',
      slug: 'long-shot',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Confession Killer',
      description:
        'Henry Lee Lucas là một kẻ giết người hàng loạt người Mỹ bị kết án với tội danh kéo dài từ năm 1960 đến năm 1983. Hắn bị kết tội giết mười một người và bị kết án tử hình vì tội giết Debra Jackson, mặc dù bản án của hắn sẽ được giảm xuống tù chung thân vào năm 1998.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-confession-killer',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Innocent Man',
      description:
        'Henry Lee Lucas là một kẻ giết người hàng loạt người Mỹ bị kết án với tội danh kéo dài từ năm 1960 đến năm 1983. Hắn bị kết tội giết 11 người và bị kết án tử hình vì tội giết Debra Jackson.',
      genre: 'crime',
      maturity: '18',
      slug: 'the-innocent-man',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'The Staircase',
      description:
        "Năm 2001, vợ của tiểu thuyết gia Michael Peterson qua đời, và ông tuyên bố bà đã chết sau khi ngã cầu thang tại nhà của họ. Tuy nhiên, giám định viên y tế xác định rằng cô đã bị đánh bằng hung khí",
      genre: 'crime',
      maturity: '18',
      slug: 'the-staircase',
    });
  
    // Feel-good
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Good Will Hunting',
      description:
        'Will Hunting, một thiên tài toán học, giải được tất cả các bài toán khó. Khi anh ấy phải đối mặt với một cuộc khủng hoảng cảm xúc, anh ấy đã nhờ đến sự giúp đỡ của bác sĩ tâm thần Sean Maguireto, người đã giúp anh ấy phục hồi.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'good-will-hunting',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Forrest Gump',
      description:
        'Forrest Gump, một người đàn ông có chỉ số IQ thấp, gia nhập quân đội để phục vụ và gặp Dan và Bubba. Tuy nhiên, anh không thể ngừng nghĩ về người yêu thời thơ ấu của mình Jenny Curran, người có cuộc sống rối tung.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'forrest-gump',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Juno',
      description:
        "Juno sai lầm trong xã hội bảo vệ bản thân bằng một sự dí dỏm ăn da, nhưng việc mang thai ngoài ý muốn của cô ấy khiến thanh thiếu niên tham gia nhiều hơn vào cuộc sống của cha mẹ nuôi của em bé hơn cô ấy mong đợi.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'juno',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Midnight In Paris',
      description:
        'Gil đến cùng hôn thê và gia đình cô ấy ở Paris để đi nghỉ, ngay cả khi anh ấy đang cố gắng hoàn thành cuốn tiểu thuyết đầu tay của mình. Anh ta bị vây quanh bởi thành phố, nơi đưa anh ta về quá khứ quá khứ, rời xa vị hôn thê của mình.',
      genre: 'feel-good',
      maturity: '12',
      slug: 'midnight-in-paris',
    });
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'School of Rock',
      description:
        "Dewey Finn, một người đam mê nhạc rock nghiệp dư, ranh mãnh nhận công việc giáo viên dạy thay thế của bạn mình. Không có bằng cấp nào cho nó, thay vào đó, anh ấy bắt đầu đào tạo các sinh viên thành một ban nhạc.",
      genre: 'feel-good',
      maturity: '12',
      slug: 'school-of-rock',
    });
  
    /* Films
      ============================================ */
    // Drama
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Prestige',
      description:
        'Hai người bạn và những pháp sư đồng nghiệp trở thành kẻ thù cay đắng sau một bi kịch bất ngờ. Khi cống hiến hết mình cho sự ganh đua này, họ hy sinh để mang lại danh tiếng nhưng để lại hậu quả khủng khiếp.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Fight Club',
      description:
        'Không hài lòng với lối sống tư bản của mình, một người mắc chứng đau dạ dày có cổ trắng thành lập một câu lạc bộ đấu tranh ngầm với Tyler, một nhân viên bán xà phòng bất cẩn. Dự án sớm biến thành một thứ gì đó nham hiểm.',
      genre: 'drama',
      maturity: '15',
      slug: 'fight-club',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Kings Speech',
      description:
        'Vua George VI cố gắng vượt qua vấn đề nói lắp của mình với sự giúp đỡ của nhà trị liệu ngôn ngữ Lionel Logue và làm cho mình đủ xứng đáng để lãnh đạo đất nước của mình vượt qua Thế chiến II.',
      genre: 'drama',
      maturity: '15',
      slug: 'kings-speech',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Revenant',
      description:
        'Hugh Glass, một chiến binh huyền thoại, bị thương nặng trong một cuộc tấn công của gấu và bị bỏ rơi bởi nhóm săn bắn của anh ta. Anh ta sử dụng các kỹ năng của mình để tồn tại và trả thù người bạn đồng hành của mình, người đã phản bội anh ta.',
      genre: 'drama',
      maturity: '15',
      slug: 'the-revenant',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Social Network',
      description:
        'Mark Zuckerberg tạo ra một trang mạng xã hội, Facebook, với sự giúp đỡ của người bạn Eduardo Saverin. Nhưng ngay sau đó, một chuỗi lời nói dối đã xé tan mối quan hệ của họ ngay cả khi Facebook kết nối mọi người.',
      genre: 'drama',
      maturity: '12',
      slug: 'the-social-network',
    });
  
    // Suspense
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Shutter Island',
      description:
        'Teddy Daniels và Chuck Aule, hai thống đốc Hoa Kỳ, được gửi đến một trại tị nạn trên một hòn đảo xa xôi để điều tra vụ mất tích của một bệnh nhân, nơi Teddy tiết lộ một sự thật gây sốc về nơi này.',
      genre: 'suspense',
      maturity: '15',
      slug: 'shutter-island',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Gone Girl',
      description:
        'Nick Dunne phát hiện ra rằng toàn bộ sự tập trung của giới truyền thông đã chuyển sang anh ta khi vợ anh ta là Amy Dunne biến mất vào ngày kỷ niệm 5 năm ngày cưới của họ.',
      genre: 'suspense',
      maturity: '15',
      slug: 'gone-girl',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Prisoners',
      description:
        "Khi cảnh sát mất thời gian để tìm con gái của Keller Dover và bạn của cô ấy, anh ta quyết định tự mình tìm kiếm. Sự tuyệt vọng của anh ấy đưa anh ấy đến gần hơn với việc tìm ra sự thật và cũng gây nguy hiểm cho cuộc sống của chính anh ấy.",
      genre: 'suspense',
      maturity: '15',
      slug: 'prisoners',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Seven',
      description:
        'Một kẻ giết người hàng loạt bắt đầu giết người theo bảy tội lỗi chết người. Hai thám tử, một người mới đến thành phố và một người sắp nghỉ hưu, được giao nhiệm vụ truy bắt tên tội phạm.',
      genre: 'suspense',
      maturity: '15',
      slug: 'seven',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Zodiac',
      description:
        'Robert Graysmith, một họa sĩ hoạt hình chuyên nghiệp, thấy mình bị ám ảnh khi nghĩ về kẻ giết người Zodiac. Anh ấy sử dụng khả năng giải câu đố của mình để tiến gần hơn đến việc tiết lộ danh tính của kẻ giết người.',
      genre: 'suspense',
      maturity: '15',
      slug: 'zodiac',
    });
  
    // children
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Hotel Transylvania',
      description:
        'Dracula, người sở hữu một khu nghỉ dưỡng cao cấp dành cho quái vật, cố gắng giữ cho con gái mình không yêu Jonathan, một con người.',
      genre: 'children',
      maturity: '0',
      slug: 'hotel-transylvania',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Despicable Me',
      description:
        'Gru, một kẻ chủ mưu tội phạm, nhận ba đứa trẻ mồ côi làm con tốt để thực hiện vụ trộm lớn nhất trong lịch sử. Cuộc đời anh có một bước ngoặt bất ngờ khi các cô gái nhỏ coi anh như một người cha tiềm năng của chúng.',
      genre: 'children',
      maturity: '0',
      slug: 'despicable-me',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Frozen',
      description:
        'Anna bắt đầu một cuộc hành trình với một người băng, Kristoff, và con tuần lộc của anh ta, Sven, để tìm em gái của cô, Elsa, người có quyền năng biến bất kỳ vật thể hoặc người nào thành băng.',
      genre: 'children',
      maturity: '0',
      slug: 'frozen',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Spirited Away',
      description:
        'Trong bộ phim hoạt hình này của đạo diễn Nhật Bản Hayao Miyazaki, cô bé 10 tuổi Chihiro (Rumi Hiiragi) và bố mẹ (Takashi Naitô, Yasuko Sawaguchi) tình cờ gặp một công viên giải trí dường như bị bỏ hoang.',
      genre: 'children',
      maturity: '0',
      slug: 'spirited-away',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Up',
      description:
        "Carl, một góa phụ già, bắt đầu cuộc phiêu lưu trong ngôi nhà bay của mình để tìm kiếm Thác Paradise, điểm đến mơ ước của vợ anh.",
      genre: 'children',
      maturity: '0',
      slug: 'up',
    });
  
    // Thriller
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Joker',
      description:
        'Mãi cô đơn trong đám đông, diễn viên hài thất bại Arthur Fleck tìm kiếm sự kết nối khi anh đi bộ trên đường phố Gotham City.',
      genre: 'thriller',
      maturity: '15',
      slug: 'joker',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Quiet Place',
      description:
        'Gia đình Abbott giờ đây phải đối mặt với nỗi kinh hoàng của thế giới bên ngoài khi họ chiến đấu để sinh tồn trong im lặng. Bị buộc phải dấn thân vào những điều chưa biết, họ nhận ra rằng những sinh vật săn mồi bằng âm thanh không phải là mối đe dọa duy nhất ẩn nấp bên ngoài con đường cát.',
      genre: 'thriller',
      maturity: '15',
      slug: 'a-quiet-place',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Black Swan',
      description:
        'Nina, một diễn viên múa ba lê, có cơ hội đóng vai Thiên nga trắng, Công chúa Odette. Nhưng cô ấy thấy mình rơi vào trạng thái điên loạn khi Thomas, giám đốc nghệ thuật, quyết định rằng Lily có thể phù hợp với vai diễn hơn.',
      genre: 'thriller',
      maturity: '15',
      slug: 'black-swan',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Nightcrawler',
      description:
        'Louis Bloom, một tên trộm vặt, nhận ra rằng anh ta có thể kiếm tiền bằng cách chụp các bức ảnh về các hoạt động tội phạm và bắt đầu sử dụng các chiến thuật cực đoan để có được chúng.',
      genre: 'thriller',
      maturity: '15',
      slug: 'nightcrawler',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Silence of The Lambs',
      description:
        'Clarice Starling, một đặc vụ FBI, tìm kiếm sự giúp đỡ từ Hannibal Lecter, một kẻ giết người hàng loạt tâm thần và cựu bác sĩ tâm thần, để bắt một kẻ giết người hàng loạt khác đã từng là nạn nhân nữ.',
      genre: 'thriller',
      maturity: '15',
      slug: 'the-silence-of-the-lambs',
    });
  
    // romance
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'A Star Is Born',
      description:
        'Sau khi yêu nghệ sĩ đang gặp khó khăn Ally, Jackson, một nhạc sĩ, đã dụ dỗ cô theo đuổi ước mơ của mình, trong khi anh chiến đấu với chứng nghiện rượu và những con quỷ cá nhân của mình.',
      genre: 'romance',
      maturity: '15',
      slug: 'a-star-is-born',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Blue Valentine',
      description:
        'Dean và Cynthia đã kết hôn với một cô con gái và cuộc hôn nhân của họ sắp đổ vỡ. Cả hai đều đến từ những gia đình rối loạn chức năng và đấu tranh để hiểu mối quan hệ của họ.',
      genre: 'romance',
      maturity: '15',
      slug: 'blue-valentine',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'La La Land',
      description:
        'Sebastian (Ryan Gosling) và Mia (Emma Stone) bị thu hút bởi mong muốn chung của họ là làm những gì họ yêu thích. Nhưng khi thành công tăng lên, họ phải đối mặt với những quyết định bắt đầu...',
      genre: 'romance',
      maturity: '15',
      slug: 'la-la-land',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'The Notebook',
      description:
        "Duke đọc câu chuyện của Allie và Noah, hai người tình bị chia cắt bởi số phận, với bà Hamilton, một bà lão mắc bệnh Alzheimer, hàng ngày trong sổ tay của anh.",
      genre: 'romance',
      maturity: '15',
      slug: 'the-notebook',
    });
    firebase.firestore().collection('films').add({
      id: getUUID(),
      title: 'Titanic',
      description:
        'Rose 17 tuổi xuất thân từ một gia đình quý tộc và đã được lập gia đình. Khi lên tàu Titanic, cô gặp Jack Dawson, một nghệ sĩ, và yêu anh ta.',
      genre: 'romance',
      maturity: '15',
      slug: 'titanic',
    });
  }