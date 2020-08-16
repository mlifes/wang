/**
  * @author wang.kt
  * @date 2020-07-15 08:37:14
  * @version 1.0
  * @description 功能描述
  * ----------------------------------------------------
  * date          author         desc
  * 2020-07-15 08:37:14 wang.kt      初始化文档
  * ----------------------------------------------------
  * */
import { PageList } from '../../../utils/tool.utils'

export default {
  name: 'summarys',
  data () {
    return {
      pageList: null,
      myOpts: {
        canRefresh: true,
        canLoadMore: true,
        noData: false
      },
      data: {
        title: '少年中国说',
        author: '梁启超',
        list: []
      },
      requestResult: [
        `日本人之称我中国也（1），一则曰老大帝国，再则曰老大帝国。是语也，盖袭译欧西人（2）之言也。呜呼！
        我中国其果老大矣乎？梁启超曰：恶（3）！是何言！是何言！吾心目中有一少年中国在！`,
        `欲言国之老少，请先言人之老少。老年人常思既往，少年人常思将来。惟思既往也，故生留恋心；惟思将来也，故生希望心。
        惟留恋也，故保守；惟希望也，故进取。惟保守也，故永旧；惟进取也，故日新。惟思既往也，事事皆其所已经者，故惟知照例；
        惟思将来也，事事皆其所未经者，故常敢破格。老年人常多忧虑，少年人常好行乐。惟多忧也，故灰心；惟行乐也，故盛气。
        惟灰心也，故怯懦；惟盛气也，故豪壮。惟怯懦也，故苟且；惟豪壮也，故冒险。惟苟且也，故能灭世界；惟冒险也，故能造世界。
        老年人常厌事，少年人常喜事。惟厌事也，故常觉一切事无可为者；惟好事也，故常觉一切事无不可为者。老年人如夕照，少年人如朝阳；
        老年人如瘠牛，少年人如乳虎。老年人如僧，少年人如侠。老年人如字典，少年人如戏文。老年人如鸦片烟，少年人如泼兰地酒。
        老年人如别行星之陨石，少年人如大洋海之珊瑚岛。老年人如埃及沙漠之金字塔（4），少年人如西比利亚（5）之铁路；
        老年人如秋后之柳，少年人如春前之草。老年人如死海（6）之潴为泽，少年人如长江之初发源。此老年与少年性格不同之大略也。
        任公曰：人固有之，国亦宜然。`,
        `梁启超曰：伤哉，老大也！浔阳（7）江头琵琶妇，当明月绕船，枫叶瑟瑟，衾寒于铁，似梦非梦之时，追想洛阳尘中春花秋月之佳趣。
        西宫（8）南内，白发宫娥，一灯如穗，三五对坐，谈开元、天宝间遗事，谱《霓裳羽衣曲》。
        青门（9）种瓜人，左对孺人，顾弄孺子，忆侯门似海珠履杂遝之盛事。拿破仑（10）之流于厄蔑，阿剌飞之幽于锡兰，与三两监守吏，或过访之好事者，
        道当年短刀匹马驰骋中原，席卷欧洲，血战海楼，一声叱咤，万国震恐之丰功伟烈（11），初而拍案，继而抚髀（12），终而揽镜。
        呜呼，面皴齿尽，白发盈把，颓然老矣！若是者，舍幽郁（13）之外无心事，舍悲惨之外无天地，舍颓唐之外无日月，舍叹息之外无音声，
        舍待死之外无事业。美人豪杰且然，而况寻常碌碌者耶？生平亲友，皆在墟墓；起居饮食，待命于人。今日且过，遑知他日？
        今年且过，遑恤明年？普天下灰心短气之事，未有甚于老大者。于此人也，而欲望以拏云（14）之手段，回天（15）之事功，挟山超海（16）之意气，能乎不能？`,
        `呜呼！我中国其果老大矣乎？立乎今日以指畴昔，唐虞三代（17），若何之郅治（18）；秦皇汉武，若何之雄杰；汉唐来之文学，若何之隆盛；康乾间之武功，若何之烜赫。
        历史家所铺叙，词章家所讴歌，何一非我国民少年时代良辰美景、赏心乐事之陈迹哉！而今颓然老矣！昨日割五城，明日割十城，处处雀鼠尽，夜夜鸡犬惊。
        十八省（19）之土地财产，已为人怀中之肉；四百兆（20）之父兄子弟，已为人注籍之奴（21），岂所谓“老大嫁作商人妇”（22）者耶？呜呼！
        凭君莫话当年事，憔悴韶光不忍看！楚囚相对（23），岌岌顾影，人命危浅，朝不虑夕。国为待死之国，一国之民为待死之民。万事付之奈何，一切凭人作弄，亦何足怪！`,
        `任公曰：我中国其果老大矣乎？是今日全地球之一大问题也。如其老大也，则是中国为过去之国，即地球上昔本有此国，而今渐澌灭，他日之命运殆将尽也。
        如其非老大也，则是中国为未来之国，即地球上昔未现此国，而今渐发达，他日之前程且方长也。欲断今日之中国为老大耶？为少年耶？
        则不可不先明“国”字之意义。夫国也者，何物也？有土地，有人民，以居于其土地之人民，而治其所居之土地之事，自制法律而自守之；
        有主权，有服从，人人皆主权者，人人皆服从者。夫如是，斯谓之完全成立之国，地球上之有完全成立之国也，自百年以来也。完全成立者，壮年之事也。
        未能完全成立而渐进于完全成立者，少年之事也。故吾得一言以断之曰：欧洲列邦在今日为壮年国，而我中国在今日为少年国。`,
        `夫古昔之中国者，虽有国之名，而未成国之形也。或为家族之国，或为酋长之国，或为诸侯封建之国，或为一王专制之国。虽种类不一，
        要之，其于国家之体质也，有其一部而缺其一部。正如婴儿自胚胎以迄成童，其身体之一二官支，先行长成，此外则全体虽粗具，然未能得其用也。
        故唐虞以前为胚胎时代，殷周之际为乳哺时代，由孔子而来至于今为童子时代。逐渐发达，而今乃始将入成童以上少年之界焉。
        其长成所以若是之迟者，则历代之民贼有窒其生机者也。譬犹童年多病，转类老态，或且疑其死期之将至焉，而不知皆由未完成未成立也。
        非过去之谓，而未来之谓也。`,
        `且我中国畴昔，岂尝有国家哉？不过有朝廷耳！我黄帝子孙，聚族而居，立于此地球之上者既数千年，而问其国之为何名，则无有也。
        夫所谓唐、虞、夏、商、周、秦、汉、魏、晋、宋、齐、梁、陈、隋、唐、宋、元、明、清者，则皆朝名耳。朝也者，一家之私产也。国也者，人民之公产也。
        朝有朝之老少，国有国之老少。朝与国既异物，则不能以朝之老少而指为国之老少明矣。文、武、成、康（26），周朝之少年时代也。幽、厉、桓、赧（27），
        则其老年时代也。高、文、景、武（28），汉朝之少年时代也。元、平、桓、灵（29），则其老年时代也。自余历朝，莫不有之。
        凡此者谓为一朝廷之老也则可，谓为一国之老也则不可。一朝廷之老旦死，犹一人之老且死也，于吾所谓中国者何与焉。
        然则，吾中国者，前此尚未出现于世界，而今乃始萌芽云尔。天地大矣，前途辽矣。美哉我少年中国乎！`,
        `玛志尼（30）者，意大利三杰之魁也。以国事被罪，逃窜异邦。乃创立一会，名曰“少年意大利”。举国志士，云涌雾集以应之。
        卒乃光复旧物，使意大利为欧洲之一雄邦。夫意大利者，欧洲之第一老大国也。自罗马亡后（31），土地隶于教皇，政权归于奥国，殆所谓老而濒于死者矣。
        而得一玛志尼，且能举全国而少年之，况我中国之实为少年时代者耶！堂堂四百余州之国土，凛凛四百余兆之国民，岂遂无一玛志尼其人者！`,
        `龚自珍氏之集有诗一章，题曰《能令公少年行》（32）。吾尝爱读之，而有味乎其用意之所存。我国民而自谓其国之老大也，斯果老大矣；
        我国民而自知其国之少年也，斯乃少年矣。西谚有之曰：“有三岁之翁，有百岁之童。”然则，国之老少，又无定形，而实随国民之心力以为消长者也。
        吾见乎玛志尼之能令国少年也，吾又见乎我国之官吏士民能令国老大也。吾为此惧！夫以如此壮丽浓郁翩翩绝世之少年中国，而使欧西日本人谓我为老大者，
        何也？则以握国权者皆老朽之人也。非哦几十年八股，非写几十年白折（33），非当几十年差，非捱几十年俸，非递几十年手本（34），非唱几十年喏（35），
        非磕几十年头，非请几十年安，则必不能得一官、进一职。其内任卿贰（36）以上，外任监司（37）以上者，百人之中，其五官不备（38）者，殆九十六七人也。
        非眼盲则耳聋，非手颤则足跛，否则半身不遂也。彼其一身饮食步履视听言语，尚且不能自了，须三四人左右扶之捉之，乃能度日，于此而乃欲责之以国事，
        是何异立无数木偶而使治天下也！且彼辈者，自其少壮之时既已不知亚细亚、欧罗巴为何处地方，汉祖唐宗是那朝皇帝，犹嫌其顽钝腐败之未臻其极，又必搓磨（39）之，
        陶冶之，待其脑髓已涸，血管已塞，气息奄奄，与鬼为邻之时，然后将我二万里山河，四万万人命，一举而界于其手。呜呼！老大帝国，诚哉其老大也！而彼辈者，
        积其数十年之八股、白折、当差、捱俸、手本、唱喏、磕头、请安，千辛万苦，千苦万辛，乃始得此红顶花翎（40）之服色，中堂大人（41）之名号，乃出其全副精神，
        竭其毕生力量，以保持之。如彼乞儿拾金一锭，虽轰雷盘旋其顶上，而两手犹紧抱其荷包，他事非所顾也，非所知也，非所闻也。于此而告之以亡国也，
        瓜分也，彼乌（42）从而听之，乌从而信之！即使果亡矣，果分矣，而吾今年七十矣，八十矣，但求其一两年内，洋人不来，强盗不起，我已快活过了一世矣！
        若不得已，则割三头两省（43）之土地奉申贺敬，以换我几个衙门；卖三几百万之人民作仆为奴，以赎我一条老命，有何不可？有何难办？呜呼！
        今之所谓老后、老臣、老将、老吏者，其修身齐家治国平天下之手段，皆具于是矣。西风一夜催人老，凋尽朱颜白尽头。使走无常（44）当医生，携催命符以祝寿，嗟乎痛哉！
        以此为国，是安得不老且死，且吾恐其未及岁而殇也。`,
        `任公曰：造成今日之老大中国者，则中国老朽之冤业也。制出将来之少年中国者，则中国少年之责任也。彼老朽者何足道，彼与此世界作别之日不远矣，
        而我少年乃新来而与世界为缘。如僦屋（45）者然，彼明日将迁居他方，而我今日始入此室处。将迁居者，不爱护其窗栊，不洁治其庭庑（46），
        俗人恒情，亦何足怪！若我少年者，前程浩浩，后顾茫茫。中国而为牛为马为奴为隶，则烹脔（47）鞭棰之惨酷，惟我少年当之。中国如称霸宇内，
        主盟地球，则指挥顾盼之尊荣，惟我少年享之。于彼气息奄奄与鬼为邻者何与焉？彼而漠然置之，犹可言也。我而漠然置之，不可言也。使举国之少年而果为少年也，
        则吾中国为未来之国，其进步未可量也。使举国之少年而亦为老大也，则吾中国为过去之国，其澌亡可翘足而待也。故今日之责任，不在他人，而全在我少年。少年智则国智，
        少年富则国富；少年强则国强，少年独立则国独立；少年自由则国自由；少年进步则国进步；少年胜于欧洲，则国胜于欧洲；少年雄于地球，则国雄于地球。
        红日初升，其道大光（48）。河出伏流，一泻汪洋。潜龙腾渊，鳞爪飞扬。乳虎啸谷，百兽震惶。鹰隼试翼，风尘翕张（又作风尘吸张 [1]  ）。奇花初胎，矞矞皇皇（49）。
        干将发硎，有作其芒（20）。天戴其苍，地履其黄。纵有千古，横有八荒。前途似海，来日方长。美哉我少年中国，与天不老！壮哉我中国少年，与国无疆！`,
        `“三十功名尘与土，八千里路云和月。莫等闲，白了少年头，空悲切。”此岳武穆《满江红》词句也，作者自六岁时即口受记忆，至今喜诵之不衰。
        自今以往，弃“哀时客”之名，更自名曰“少年中国之少年”。`
      ]
    }
  },
  mounted () {
    this.initPageList()
    this.initData()
  },
  methods: {
    initData: function () {
      this.getData({ pageIndex: 0, pageSize: 4 })
    },
    initPageList: function () {
      const that = this
      that.pageList = new PageList()
      that.pageList.size = 4
      that.pageList.refresh = that.pageList.loadMore = that.getData
    },
    onRefresh: function (completed) {
      this.pageList.onRefresh()
      completed && completed()
    },
    onLoadMore: function (completed) {
      this.pageList.onLoadMore()
      completed && completed()
    },
    // 获取文章数据，此处只是为了演示
    getData: function (params) {
      const res = this.requestResult.slice(params.pageIndex * params.pageSize, (params.pageIndex + 1) * params.pageSize)
      if (params.pageIndex === 0) {
        // 表示刷新方法
        this.data.list = res
        this.myOpts.noData = false
      } else {
        // 表示加载更多
        this.data.list = this.data.list.concat(res)
      }
      if (res.length < params.pageSize) {
        // 表示已经加载完成
        this.pageList.canLoadMore = false
        this.myOpts.noData = true
      }
    }
  }
}
