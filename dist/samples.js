// Human-authored bilingual phrases. Variations change the subject action and camera.
const phrasePairs=new Map();function pair(en,ja){phrasePairs.set(en,ja);return en}
const cameras=[pair('The camera holds a static shot.','カメラは固定され、構図は変わらない。'),pair('The camera pushes in with small amplitude at slow speed.','カメラは狭い範囲でゆっくり前進し、被写体へ近づく。'),pair('The camera pans right with small amplitude at slow speed.','カメラは位置を保ち、狭い範囲でゆっくり右へ向きを変える。')];
const commonMusic=pair('Sparse synthesizer notes at a slow tempo gradually fade out at the end.','ゆっくりしたテンポでシンセサイザーの音が間隔を空けて鳴り、最後に徐々に消える。');
const sampleCatalog={};function sample(key,title,style,jaStyle,variants,sound,jaSound,music=commonMusic){sampleCatalog[key]={title,style:pair(style,jaStyle),variants:variants.map(v=>pair(v[0],v[1])),sound:pair(sound,jaSound),music}}
sample('mandala','曼荼羅 / VJ','Abstract 3D animation with violet and gold emissive geometry against a black background.','黒い背景に、紫と金色に発光する幾何学模様を描いた抽象的な3Dアニメーション。',[
['A symmetrical mandala fills the frame. Concentric rings rotate clockwise while petals expand outward and return to their initial positions.','左右対称の曼荼羅が画面を満たす。同心円が時計回りに回転し、花びらが外側へ広がって元の位置に戻る。'],
['A central luminous polygon unfolds into layered geometric petals. Each layer turns in the opposite direction to its neighboring layer.','中央の発光する多角形が開き、何層もの幾何学的な花びらになる。隣り合う層は互いに逆方向へ回転する。'],
['Crystalline shapes form a radial mandala. Gold light travels from the center toward the edges as the crystals pulse in size.','結晶の形が放射状に並び、曼荼羅を作る。金色の光が中心から外縁へ進み、結晶が脈打つように大きさを変える。']],
'A low electronic hum continues throughout, with soft pulses synchronized to the moving rings.','低い電子音が続き、柔らかな脈動音が輪の動きと同期する。',pair('A 120 BPM electronic score with a steady kick drum and sustained synthesizer notes fades out at the end.','120 BPMの電子音楽。一定のキックドラムと持続するシンセサイザー音が、最後に徐々に消える。'));
sample('beer','クラフトビール / 商品撮影','Live-action product photography with warm side lighting on a wooden table.','木のテーブルに暖かな横からの光を当てた実写の商品撮影。',[
['A glass of amber beer stands at the center of the table. Bubbles rise through the liquid as condensation slides down the glass.','琥珀色のビールを入れたグラスがテーブルの中央に立つ。泡が液体の中を上昇し、水滴がグラスを伝って落ちる。'],
['A hand tilts a clear glass as amber beer pours into it. A white foam head gradually forms and the pouring stream stops.','手が透明なグラスを傾け、琥珀色のビールが注がれる。白い泡が徐々にでき、注ぐ流れが止まる。'],
['Three small tasting glasses sit in a row. A hand moves the darkest beer slightly forward, revealing its foam and rising bubbles.','小さな試飲グラスが3個並ぶ。手が最も濃い色のビールを少し前へ動かし、泡と上昇する気泡を見せる。']],
'Quiet indoor room tone continues with faint glass contact sounds.','静かな室内の環境音に、かすかなグラスの触れる音が重なる。');
sample('mountain','山岳 / 雲海','Live-action landscape photography with cool dawn light and gold sunlight on the peaks.','冷たい夜明けの光と山頂への金色の日差しを使った、実写の風景撮影。',[
['A mountain ridge rises above a cloud layer. Clouds drift left to right as sunlight reaches the rocks.','山の稜線が雲海の上にそびえる。雲が左から右へ流れ、岩へ日差しが届く。'],
['A hiker stands beside a cairn on a rocky ridge. Their jacket moves in the wind as they turn toward the distant summit.','登山者が岩の稜線のケルンの横に立つ。風で上着が揺れ、遠くの山頂へ顔を向ける。'],
['Thin mist crosses a mountain lake. Ripples spread across the reflected peaks as dawn light brightens the water.','薄い霧が山の湖を横切る。水面に映る山々の上に波紋が広がり、夜明けの光で水が明るくなる。']],
'A steady wind passes over the rocks with occasional distant bird calls.','岩を越える風が一定に吹き、ときどき遠くから鳥の声が聞こえる。','N/A');
sample('dance','ダンス / ステージ','Live-action full-body stage photography with blue and magenta lights.','青とマゼンタの照明を使った、全身を映す実写のステージ撮影。',[
['An adult dancer stands at the center of the stage, steps sideways twice, turns once, and settles into a balanced pose.','成人のダンサーがステージ中央で横へ2歩動き、1回転して安定したポーズになる。'],
['An adult dancer alternates heel taps with fluid arm movements, then extends one arm toward the light.','成人のダンサーがかかとを交互に打ち、腕を滑らかに動かしてから片腕を光へ伸ばす。'],
['Two adult dancers perform mirrored shoulder and arm movements, stepping apart before returning to the center.','成人のダンサー2人が鏡合わせの肩と腕の動きを行い、離れてから中央へ戻る。']],
'Soft footfalls and fabric movement are audible beneath the music.','音楽の下で、軽い足音と衣服の擦れる音が聞こえる。',pair('A 110 BPM funk track with bass guitar, snare drum, and short keyboard chords continues throughout.','110 BPMのファンク。ベースギター、スネアドラム、短い鍵盤の和音が動画全体で続く。'));
sample('space','宇宙 / SF','Detailed 3D CG with blue light and metallic surfaces inside a spacecraft.','宇宙船内の青い光と金属面を細かく描いた3D CG。',[
['A spacecraft approaches a ringed planet. The planet grows slowly in the observation window while instrument lights blink.','宇宙船が環のある惑星へ近づく。観測窓の惑星がゆっくり大きくなり、計器の光が点滅する。'],
['A small maintenance robot rolls across the bridge and extends an arm to press an illuminated control panel.','小さな整備ロボットが船橋を移動し、腕を伸ばして発光する操作パネルを押す。'],
['An astronaut floats beside a window, gently pushes away from a handrail, and drifts toward the center of the cabin.','宇宙飛行士が窓の横に浮かび、手すりを軽く押して船室の中央へ漂う。']],
'A low ventilation hum continues with quiet electronic beeps.','低い換気音に静かな電子音が重なる。');
sample('neon','ネオン街 / サイバーパンク','Live-action night street photography with cyan and magenta light reflected on wet pavement.','濡れた路面にシアンとマゼンタの光が反射する、実写の夜の街。',[
['A person carrying a transparent umbrella walks past illuminated storefronts. Raindrops run down the umbrella as reflections shift beneath their feet.','透明な傘を持つ人が明るい店の前を歩く。雨粒が傘を伝い、足元の反射が移り変わる。'],
['A tram moves through a narrow night street. Its windows reflect colored lights while pedestrians wait behind the curb.','路面電車が狭い夜の通りを進む。窓に色とりどりの光が映り、歩行者が歩道の縁で待つ。'],
['Steam rises from a street food stall. A cook lifts a metal lid, revealing fresh steam under the colored lamps.','屋台から湯気が上がる。料理人が金属の蓋を持ち上げ、色の付いた照明の下に新たな湯気が現れる。']],
'Rain taps the pavement while distant traffic and soft footsteps continue.','雨が路面を打ち、遠くの交通音と軽い足音が続く。');
sample('flower','花 / マクロ','Live-action macro photography with soft daylight and a blurred green background.','柔らかい自然光とぼけた緑の背景を使った、実写のマクロ撮影。',[
['A flower bud slowly opens its outer petals. A dew drop moves down one petal and falls.','花のつぼみの外側の花びらがゆっくり開き、露が1枚の花びらを伝って落ちる。'],
['A butterfly lands on a flower, closes its wings briefly, then opens them while the stem bends slightly.','蝶が花に止まり、羽を短く閉じてから開く。茎がわずかにしなる。'],
['A bee approaches a flower and lands on its center. Pollen shifts as the bee moves between the stamens.','蜂が花へ近づいて中央に止まる。雄しべの間を動くにつれて花粉が動く。']],
'A light breeze rustles nearby leaves with faint insect wing sounds.','そよ風が近くの葉を揺らし、かすかな虫の羽音が聞こえる。');
sample('ocean','海 / 水中','Detailed underwater 3D animation with turquoise water and sunlight rays.','青緑の水と差し込む日光を細かく描いた、水中の3Dアニメーション。',[
['A sea turtle swims above a coral reef. Its flippers move slowly as small fish scatter and regroup.','ウミガメがサンゴ礁の上を泳ぐ。ひれがゆっくり動き、小魚が散ってから再び集まる。'],
['A school of silver fish forms a spiral around a rock, then straightens into a flowing line.','銀色の魚の群れが岩の周りでらせんを作り、その後に流れるような列になる。'],
['A jellyfish contracts its translucent bell and rises through floating particles toward a shaft of sunlight.','クラゲが透ける傘を縮め、浮遊する粒子の中を日光の筋に向かって上昇する。']],
'A subdued underwater rumble continues with occasional soft bubbles.','抑えた水中の低音が続き、ときどき柔らかい泡の音が聞こえる。');
sample('drone','ドローン / 飛行','Live-action outdoor photography in warm afternoon light.','午後の暖かな光を使った実写の屋外撮影。',[
['A quadcopter lifts vertically from a grass landing pad, stabilizes above it, and rotates slightly to face the field.','クアッドコプターが草地の離陸場所から垂直に上がり、上空で安定してから少し回転して野原へ向く。'],
['A quadcopter hovers beside a tree, then moves sideways into the open field at a steady speed.','クアッドコプターが木の横で静止し、一定速度で横へ動いて開けた野原へ入る。'],
['A quadcopter approaches a landing pad, slows down, descends, and settles gently as its propellers stop.','クアッドコプターが着陸場所へ近づき、減速して降下する。静かに着地し、プロペラが止まる。']],
'Propellers produce a steady buzz that changes in pitch as the drone moves.','プロペラが一定の羽音を出し、ドローンの動きに応じて音の高さが変わる。','N/A');
sample('food','料理 / 湯気','Live-action close-up food photography with warm kitchen light.','暖かなキッチンの光を使った、実写の料理の接写。',[
['A bowl of ramen rests on a wooden counter. Steam curls upward as chopsticks lift a small bundle of noodles.','木のカウンターにラーメンの丼が置かれる。箸が少量の麺を持ち上げ、湯気が曲がりながら上昇する。'],
['A chef slices a loaf of bread. The first slice falls gently onto the board and steam emerges from the cut surface.','料理人がパンを切る。最初の1枚がまな板へ静かに倒れ、切り口から湯気が出る。'],
['Hot water pours into a glass coffee dripper. The coffee bed swells and dark droplets fall into a cup below.','ガラスのコーヒードリッパーにお湯が注がれる。粉が膨らみ、下のカップへ濃い色の滴が落ちる。']],
'Quiet kitchen ambience continues with soft utensil contact and liquid sounds.','静かなキッチンの環境音に、道具の触れる音と液体の音が重なる。');
sample('animal','動物 / 日常','Live-action animal photography with soft window light.','窓からの柔らかい光を使った、実写の動物撮影。',[
['A cat sits on a windowsill, follows a falling leaf with its eyes, and tilts its head slightly.','猫が窓辺に座り、落ちる葉を目で追って頭を少し傾ける。'],
['A small dog approaches a soft ball, nudges it with its nose, and follows it across the rug.','小さな犬が柔らかいボールへ近づき、鼻で押してから敷物の上を追いかける。'],
['A rabbit sits beside a wooden bowl, sniffs a leaf, and begins chewing it slowly.','ウサギが木の器の横に座り、葉の匂いを嗅いでからゆっくり食べ始める。']],
'Quiet indoor ambience continues with soft paw movements and light breathing.','静かな室内の環境音に、軽い足の動きと呼吸音が重なる。','N/A');
sample('robot','ロボット / 作業','Detailed 3D CG in a clean workshop with diffuse white lighting.','均一な白い照明を使った、整った作業場の精細な3D CG。',[
['A robotic arm lifts a small metal cube, rotates it once, and places it inside a matching tray.','ロボットアームが小さな金属の立方体を持ち上げ、1回転させてから対応するトレーに置く。'],
['A compact wheeled robot approaches a workbench and extends a gripper to retrieve a blue tool.','小型の車輪付きロボットが作業台に近づき、グリッパーを伸ばして青い工具を取る。'],
['A humanoid robot aligns two wooden blocks on a table, slides them together, and retracts its hands.','人型ロボットがテーブル上の木のブロック2個を揃えて滑らせ、重ねてから手を引く。']],
'Quiet motor whirs accompany small clicks as objects contact the work surface.','静かなモーター音に、物が作業面へ触れる小さな音が重なる。');
const sampleCounters={};function nextSample(key){let p=sampleCatalog[key];const n=sampleCounters[key]??Math.floor(Math.random()*9);sampleCounters[key]=n+1;return{...p,description:p.variants[Math.floor(n/3)%3]+' '+cameras[n%3],variant:n%9+1}}
function translateKnown(text){if(text==='N/A')return 'なし（N/A）';if(phrasePairs.has(text))return phrasePairs.get(text);for(let c of cameras){if(text.endsWith(' '+c)){let body=text.slice(0,-c.length-1);if(phrasePairs.has(body))return phrasePairs.get(body)+' '+phrasePairs.get(c)}}return null}
