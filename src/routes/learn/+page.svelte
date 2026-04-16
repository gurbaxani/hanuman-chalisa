<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	let activeIndex: number | null = $state(0);
	let activeTab: 'meaning' | 'words' | 'context' = $state('meaning');

	const content = $derived([
		// --- Opening Dohas ---
		{
			type: 'Doha',
			label: 'Opening',
			lines: [m.opening_doha_1(), m.opening_doha_2(), m.opening_doha_3(), m.opening_doha_4()],
			meaning: 'Cleansing the mirror of my mind with the dust from Guru\'s lotus feet, I describe the pure glory of Lord Rama, which bestows the four fruits of life.',
			words: [
				{ word: 'Shri Guru', meaning: 'The respected Guru' },
				{ word: 'Charan', meaning: 'Feet' },
				{ word: 'Saroj', meaning: 'Lotus' },
				{ word: 'Raj', meaning: 'Dust' },
				{ word: 'Sudhar', meaning: 'Purify / Cleanse' }
			],
			context: 'The Chalisa begins with a traditional invocation. Tulsidas speaks of cleaning the mind\'s mirror using the dust from his Guru\'s feet, emphasizing that spiritual insight requires a clear, humble heart.',
			theme: 'Spiritual preparation'
		},
		{
			type: 'Doha',
			label: 'Opening',
			lines: [m.opening_doha_5(), m.opening_doha_6(), m.opening_doha_7(), m.opening_doha_8()],
			meaning: 'Knowing myself to be devoid of intelligence, I remember the Son of the Wind, Hanuman. Grant me strength, wisdom, and knowledge, and remove my miseries.',
			words: [
				{ word: 'Budhi Hin', meaning: 'Lacking intelligence' },
				{ word: 'Tanu', meaning: 'Body / Self' },
				{ word: 'Sumirau', meaning: 'Remember / Meditate' },
				{ word: 'Bal budhi', meaning: 'Strength & wisdom' },
				{ word: 'Kalesa', meaning: 'Miseries / Sufferings' }
			],
			context: 'This doha is a plea for empowerment. By acknowledging human limitations, the devotee creates space for divine grace through Hanuman, the life force (Prana).',
			theme: 'Plea for grace'
		},

		// --- Chaupais (1 to 20 Detailed) ---
		{
			type: 'Chaupai',
			label: 'Verse 01',
			lines: [m.verse_1_1(), m.verse_1_2()],
			meaning: 'Victory to Hanuman, the ocean of wisdom and virtue. Victory to the Lord of monkeys who illuminates all three worlds with his glory.',
			words: [
				{ word: 'Jai', meaning: 'Victory / Hail' },
				{ word: 'Gyan', meaning: 'Wisdom, knowledge' },
				{ word: 'Gun sagar', meaning: 'Ocean of virtues' },
				{ word: 'Kapis', meaning: 'Lord of monkeys' },
				{ word: 'Tihun lok', meaning: 'Three realms' },
				{ word: 'Ujagar', meaning: 'Illuminator' }
			],
			context: 'Establishes Hanuman as an ocean of wisdom. Tulsidas begins with "Jai" — an invocation of victory and blessings.',
			theme: 'Cosmic glory & invocation'
		},
		{
			type: 'Chaupai',
			label: 'Verse 02',
			lines: [m.verse_2_1(), m.verse_2_2()],
			meaning: 'You are the messenger of Ram, the abode of incomparable strength. Son of Anjani and child of the Wind God — these are your sacred names.',
			words: [
				{ word: 'Ram doot', meaning: 'Messenger of Rama' },
				{ word: 'Atulit', meaning: 'Incomparable, matchless' },
				{ word: 'Bal dhama', meaning: 'Abode of strength' },
				{ word: 'Anjani-putra', meaning: 'Son of mother Anjana' },
				{ word: 'Pavan-sut', meaning: 'Child of the Wind God' }
			],
			context: '"Pavan-sut" connects Hanuman to prana — the breath of life. He is a bridge between the human and the cosmic.',
			theme: 'Divine lineage'
		},
		{
			type: 'Chaupai',
			label: 'Verse 03',
			lines: [m.verse_3_1(), m.verse_3_2()],
			meaning: 'Great hero of immense valour, with a body hard as a thunderbolt — you dispel ignorance and dwell always with the wise and the pure of heart.',
			words: [
				{ word: 'Mahavir', meaning: 'Great warrior' },
				{ word: 'Vikram', meaning: 'Courage, valour' },
				{ word: 'Bajrangi', meaning: 'Body like thunderbolt' },
				{ word: 'Kumati', meaning: 'Evil intellect' },
				{ word: 'Sumati ke sangi', meaning: 'Companion of the wise' }
			],
			context: 'Focuses on Hanuman\'s role as a guardian of the mind. Devotion leads to clarity of thought.',
			theme: 'Intellect & inner protection'
		},
		{
			type: 'Chaupai',
			label: 'Verse 04',
			lines: [m.verse_4_1(), m.verse_4_2()],
			meaning: 'Radiant with a golden complexion, adorned in splendid garments, wearing earrings that gleam, with flowing curly hair — your form is luminous.',
			words: [
				{ word: 'Kanchan baran', meaning: 'Golden complexion' },
				{ word: 'Biraj', meaning: 'Resplendent' },
				{ word: 'Subesa', meaning: 'Beautifully attired' },
				{ word: 'Kanan kundal', meaning: 'Earrings' },
				{ word: 'Kunchit kesa', meaning: 'Curly hair' }
			],
			context: 'A formal description used for meditation (swarup dhyan). Every physical detail is an invitation to focus the mind on the Divine.',
			theme: 'The divine form'
		},
		{
			type: 'Chaupai',
			label: 'Verse 05',
			lines: [m.verse_5_1(), m.verse_5_2()],
			meaning: 'In your hands shine a thunderbolt and a victory flag, while across your shoulder rests the sacred thread woven from munja grass.',
			words: [
				{ word: 'Hath', meaning: 'Hand' },
				{ word: 'Vajra', meaning: 'Thunderbolt' },
				{ word: 'Dhwaja', meaning: 'Flag' },
				{ word: 'Janeu', meaning: 'Sacred thread' }
			],
			context: 'Hanuman unites the traits of the warrior (flag/vajra) and the scholar (thread), showing that strength and wisdom are not separate.',
			theme: 'Warrior & Scholar'
		},
		{
			type: 'Chaupai',
			label: 'Verse 06',
			lines: [m.verse_6_1(), m.verse_6_2()],
			meaning: 'You are the incarnation of Lord Shiva and the son of Kesari. Your immense radiance and power are worshipped by the whole world.',
			words: [
				{ word: 'Sankar suvan', meaning: 'Shiva\'s incarnation' },
				{ word: 'Kesri Nandan', meaning: 'Son of Kesari' },
				{ word: 'Tej', meaning: 'Radiance' },
				{ word: 'Jag vandan', meaning: 'Worshipped by all' }
			],
			context: 'Acknowledges Hanuman\'s divine origin as the 11th Rudra (Shiva) and his status as a world-venerated hero.',
			theme: 'Divine incarnation'
		},
		{
			type: 'Chaupai',
			label: 'Verse 07',
			lines: [m.verse_7_1(), m.verse_7_2()],
			meaning: 'You are the storehouse of knowledge, full of virtues and extremely clever. You are always eager to perform the work of Lord Rama.',
			words: [
				{ word: 'Vidyavan', meaning: 'Learned' },
				{ word: 'Guni', meaning: 'Virtuous' },
				{ word: 'Chatur', meaning: 'Clever' },
				{ word: 'Ram kaj', meaning: 'Ram\'s work' },
				{ word: 'Aatur', meaning: 'Eager/Restless to serve' }
			],
			context: 'Defines Hanuman\'s character: despite his infinite power, his only desire is humble service to his Lord.',
			theme: 'Eagerness for service'
		},
		{
			type: 'Chaupai',
			label: 'Verse 08',
			lines: [m.verse_8_1(), m.verse_8_2()],
			meaning: 'You take great delight in listening to the stories of the Lord. Ram, Lakshman, and Sita dwell in your heart.',
			words: [
				{ word: 'Prabu charitra', meaning: 'The Lord\'s stories' },
				{ word: 'Rasiya', meaning: 'Delight taker/Devotee' },
				{ word: 'Man Basiya', meaning: 'Dweller in the heart' }
			],
			context: 'Highlights that even the most powerful being finds the greatest joy in simple devotion and listening to the Divine name.',
			theme: 'Devotional delight'
		},
		{
			type: 'Chaupai',
			label: 'Verse 09',
			lines: [m.verse_9_1(), m.verse_9_2()],
			meaning: 'You appeared before Mother Sita in a tiny form. You assumed a terrifying form to burn the city of Lanka.',
			words: [
				{ word: 'Sukshma roop', meaning: 'Tiny form' },
				{ word: 'Siyahi', meaning: 'Sita' },
				{ word: 'Vikat roop', meaning: 'Terrifying form' },
				{ word: 'Jarava', meaning: 'Burned' }
			],
			context: 'Refers to Hanuman\'s mastery over physical form (Siddhis), allowing him to be subtle and fierce as required.',
			theme: 'Shapeshifting & Power'
		},
		{
			type: 'Chaupai',
			label: 'Verse 10',
			lines: [m.verse_10_1(), m.verse_10_2()],
			meaning: 'Assuming a gigantic form, you destroyed the demons and successfully completed the tasks assigned by Lord Rama.',
			words: [
				{ word: 'Bhima roop', meaning: 'Gigantic form' },
				{ word: 'Asur', meaning: 'Demons' },
				{ word: 'Sanghare', meaning: 'Destroyed' },
				{ word: 'Sanvare', meaning: 'Completed/Perfected' }
			],
			context: 'Showcases Hanuman as the ultimate protector who clears all obstacles for the righteous and the Divine.',
			theme: 'Protector & Accomplisher'
		},
		{
			type: 'Chaupai',
			label: 'Verse 11',
			lines: [m.verse_11_1(), m.verse_11_2()],
			meaning: 'You brought the Sanjeevani herb and revived Lakshmana. Lord Rama embraced you with overwhelming joy.',
			words: [
				{ word: 'Sanjivan', meaning: 'Life-giving herb' },
				{ word: 'Lakhan', meaning: 'Lakshmana' },
				{ word: 'Jiyaye', meaning: 'Revived' },
				{ word: 'Harashi', meaning: 'Joyfully' },
				{ word: 'Ur laye', meaning: 'Embraced' }
			],
			context: 'One of Hanuman\'s most famous feats, demonstrating his resourcefulness and his irreplaceable importance to Rama.',
			theme: 'Lifesaver & Devotion'
		},
		{
			type: 'Chaupai',
			label: 'Verse 12',
			lines: [m.verse_12_1(), m.verse_12_2()],
			meaning: 'Lord Rama praised you immensely and said, "You are as dear to me as my own brother Bharata."',
			words: [
				{ word: 'Bahut badai', meaning: 'Much praise' },
				{ word: 'Priye', meaning: 'Dear' },
				{ word: 'Bharat-hi', meaning: 'Bharata' },
				{ word: 'Sam bhai', meaning: 'Equal to a brother' }
			],
			context: 'The highest honor a devotee can receive—to be considered equal to the Lord\'s most beloved kin.',
			theme: 'Divine love'
		},
		{
			type: 'Chaupai',
			label: 'Verse 13',
			lines: [m.verse_13_1(), m.verse_13_2()],
			meaning: '"May the thousand-mouthed serpent sing your glory," saying this, the Lord of Shri (Rama) embraced you once more.',
			words: [
				{ word: 'Sahas badan', meaning: 'Thousand mouths' },
				{ word: 'Yash', meaning: 'Glory' },
				{ word: 'Gaave', meaning: 'Sings' },
				{ word: 'Shripati', meaning: 'Lord of Rama' }
			],
			context: 'Signifies that even a thousand mouths are insufficient to fully describe Hanuman\'s greatness.',
			theme: 'Infinite Glory'
		},
		{
			type: 'Chaupai',
			label: 'Verse 14',
			lines: [m.verse_14_1(), m.verse_14_2()],
			meaning: 'Sage Sanaka and his brothers, Lord Brahma, and other great saints, along with Narada and Goddess Saraswati, sing your glory.',
			words: [
				{ word: 'Sankadik', meaning: 'Sanaka & others' },
				{ word: 'Brahmadi', meaning: 'Brahma & others' },
				{ word: 'Narad', meaning: 'Narada' },
				{ word: 'Sarad', meaning: 'Saraswati' }
			],
			context: 'Hanuman is venerated by the highest cosmic beings and deities across the universe.',
			theme: 'Universal Veneration'
		},
		{
			type: 'Chaupai',
			label: 'Verse 15',
			lines: [m.verse_15_1(), m.verse_15_2()],
			meaning: 'Even Yama, Kubera, and the guardians of the directions are unable to fully describe your glory. How then can poets find words for it?',
			words: [
				{ word: 'Yam', meaning: 'God of Death' },
				{ word: 'Kuber', meaning: 'God of Wealth' },
				{ word: 'Digpal', meaning: 'Guardians' },
				{ word: 'Kavi', meaning: 'Poets' }
			],
			context: 'Implies that Hanuman\'s virtues are beyond human (and even divine) comprehension and literary expression.',
			theme: 'Ineffable Greatness'
		},
		{
			type: 'Chaupai',
			label: 'Verse 16',
			lines: [m.verse_16_1(), m.verse_16_2()],
			meaning: 'You did a great favor for Sugriva by introducing him to Rama and helping him regain his kingdom.',
			words: [
				{ word: 'Upkar', meaning: 'Favor/Help' },
				{ word: 'Sugreevahin', meaning: 'Sugriva' },
				{ word: 'Ram milaye', meaning: 'United with Ram' },
				{ word: 'Rajpad', meaning: 'Kingdom' }
			],
			context: 'Highlights Hanuman as a mediator and a king-maker. He connects the seeker with the Divine.',
			theme: 'Mediator & Helper'
		},
		{
			type: 'Chaupai',
			label: 'Verse 17',
			lines: [m.verse_17_1(), m.verse_17_2()],
			meaning: 'Vibhishana accepted your counsel and became the Lord of Lanka, as is known throughout the world.',
			words: [
				{ word: 'Mantra', meaning: 'Counsel' },
				{ word: 'Vibheeshan', meaning: 'Vibhishana' },
				{ word: 'Lankeshwar', meaning: 'Lord of Lanka' }
			],
			context: 'Shows Hanuman\'s influence on the righteous. Even in the enemy camp, his wisdom guided Vibhishana to safety.',
			theme: 'Wise Counsel'
		},
		{
			type: 'Chaupai',
			label: 'Verse 18',
			lines: [m.verse_18_1(), m.verse_18_2()],
			meaning: 'You swallowed the Sun, which is thousands of miles away, thinking it was a sweet, ripe fruit.',
			words: [
				{ word: 'Sahastra', meaning: 'Thousand' },
				{ word: 'Bhanu', meaning: 'Sun' },
				{ word: 'Leelyo', meaning: 'Swallowed' },
				{ word: 'Madhur phal', meaning: 'Sweet fruit' }
			],
			context: 'Refers to Hanuman\'s childhood feat, showing his boundless appetite for the impossible and his raw cosmic power.',
			theme: 'Boundless Power'
		},
		{
			type: 'Chaupai',
			label: 'Verse 19',
			lines: [m.verse_19_1(), m.verse_19_2()],
			meaning: 'Placing the Lord\'s ring in your mouth, you leaped across the ocean; it was no surprise for you.',
			words: [
				{ word: 'Mudrika', meaning: 'Ring' },
				{ word: 'Mukh', meaning: 'Mouth' },
				{ word: 'Jaladhi', meaning: 'Ocean' },
				{ word: 'Langhi gaye', meaning: 'Leaped across' }
			],
			context: 'When one has the Lord\'s name or token, even crossing the vast ocean of existence becomes effortless.',
			theme: 'Faith & Feat'
		},
		{
			type: 'Chaupai',
			label: 'Verse 20',
			lines: [m.verse_20_1(), m.verse_20_2()],
			meaning: 'All the difficult tasks in this world become easy by your grace.',
			words: [
				{ word: 'Durgaam', meaning: 'Difficult' },
				{ word: 'Jagat', meaning: 'World' },
				{ word: 'Sugam', meaning: 'Easy' },
				{ word: 'Anugraha', meaning: 'Grace' }
			],
			context: 'A powerful assurance that no obstacle is too great when Hanuman\'s blessing is present.',
			theme: 'Dispeller of Obstacles'
		},

		// --- Chaupais (21 to 25 Detailed) ---
		{
			type: 'Chaupai',
			label: 'Verse 21',
			lines: [m.verse_21_1(), m.verse_21_2()],
			meaning: "You are the sentinel at Rama's door. No one can enter His presence without your permission and grace.",
			words: [
				{ word: 'Ram duwaare', meaning: "At Rama's door" },
				{ word: 'Rakhvare', meaning: 'Guardian / Sentinel' },
				{ word: 'Aajna binu', meaning: 'Without permission' },
				{ word: 'Paisare', meaning: 'Entry / Admission' }
			],
			context: 'Symbolizes that Hanuman is the bridge to the Divine. One must first find favor with the devotee (Hanuman) to reach the Beloved (Rama).',
			theme: 'The Divine Gatekeeper'
		},
		{
			type: 'Chaupai',
			label: 'Verse 22',
			lines: [m.verse_22_1(), m.verse_22_2()],
			meaning: 'All happiness comes to those who take refuge in you. With you as the protector, there is no reason to fear anything in the universe.',
			words: [
				{ word: 'Sab sukh', meaning: 'All happiness' },
				{ word: 'Lahai', meaning: 'Obtain / Receive' },
				{ word: 'Sarna', meaning: 'Refuge / Shelter' },
				{ word: 'Rakshak', meaning: 'Protector' },
				{ word: 'Darna', meaning: 'To fear' }
			],
			context: 'Assures the devotee that surrender to Hanuman grants complete protection, making one fearless against all worldly and spiritual obstacles.',
			theme: 'Refuge & Fearlessness'
		},
		{
			type: 'Chaupai',
			label: 'Verse 23',
			lines: [m.verse_23_1(), m.verse_23_2()],
			meaning: 'Only you can contain your own immense radiance and power. All the three worlds tremble when you give a mighty roar.',
			words: [
				{ word: 'Aapan tej', meaning: 'Your own power/radiance' },
				{ word: 'Samharo', meaning: 'Control / Manage' },
				{ word: 'Teenon lok', meaning: 'Three worlds' },
				{ word: 'Haank', meaning: 'Roar / Call' },
				{ word: 'Kaanpai', meaning: 'Tremble' }
			],
			context: "Describes Hanuman's raw, unbridled energy. He is the master of his own cosmic force, which is so great that it awes the entire universe.",
			theme: 'Mastery of Power'
		},
		{
			type: 'Chaupai',
			label: 'Verse 24',
			lines: [m.verse_24_1(), m.verse_24_2()],
			meaning: "Ghosts and evil spirits do not venture near when the name of the 'Great Hero' (Mahaveer) is recited with devotion.",
			words: [
				{ word: 'Bhoot Pishach', meaning: 'Ghosts / Evil spirits' },
				{ word: 'Nikat', meaning: 'Near' },
				{ word: 'Nahin aavai', meaning: 'Do not approach' },
				{ word: 'Mahaveer', meaning: 'Great Hero' }
			],
			context: "Establishes Hanuman's name as a powerful mantra for protection. His presence dispels negativity and dark influences instantly.",
			theme: 'Spiritual Protection'
		},
		{
			type: 'Chaupai',
			label: 'Verse 25',
			lines: [m.verse_25_1(), m.verse_25_2()],
			meaning: 'All diseases are cured and all pains are removed by the continuous chanting of the name of the brave Lord Hanuman.',
			words: [
				{ word: 'Nasai rog', meaning: 'Cures diseases' },
				{ word: 'Hare sab peera', meaning: 'Removes all pain' },
				{ word: 'Japat nirantara', meaning: 'Chanting continuously' },
				{ word: 'Hanumat beera', meaning: 'Brave Hanuman' }
			],
			context: 'Focuses on the healing aspect of Hanuman-bhakti. Faith and constant remembrance are presented as the ultimate remedy for physical and mental suffering.',
			theme: 'Healing & Relief'
		},
		// --- Chaupais (26 to 30 Detailed) ---
		{
			type: 'Chaupai',
			label: 'Verse 26',
			lines: [m.verse_26_1(), m.verse_26_2()],
			meaning: 'Hanuman delivers from all troubles those who meditate on him with their mind, actions, and speech.',
			words: [
				{ word: 'Sankat te', meaning: 'From troubles / distress' },
				{ word: 'Churavai', meaning: 'Releases / Delivers' },
				{ word: 'Man Kram Vachan', meaning: 'Mind, Action, Speech' },
				{ word: 'Dhyan jo lavai', meaning: 'Whoever meditates' }
			],
			context: 'Emphasizes the power of sincere, total devotion. When one aligns their thoughts, words, and deeds in remembrance, Hanuman provides liberation from distress.',
			theme: 'Total Surrender'
		},
		{
			type: 'Chaupai',
			label: 'Verse 27',
			lines: [m.verse_27_1(), m.verse_27_2()],
			meaning: 'Though Rama is the supreme ascetic King over all, you are the one who accomplishes and manages all His tasks.',
			words: [
				{ word: 'Sab para', meaning: 'Over all' },
				{ word: 'Tapasvee raja', meaning: 'Ascetic King' },
				{ word: 'Kaaj sakal', meaning: 'All tasks' },
				{ word: 'Tum saajaa', meaning: 'Managed by you' }
			],
			context: "Highlights Hanuman as the 'Karta' (doer) who carries out the Divine will. It shows that the greatest power of Rama is manifested through Hanuman's service.",
			theme: 'The Divine Instrument'
		},
		{
			type: 'Chaupai',
			label: 'Verse 28',
			lines: [m.verse_28_1(), m.verse_28_2()],
			meaning: 'Whoever brings any other desire or longing to you obtains the limitless fruits of life.',
			words: [
				{ word: 'Aur manorath', meaning: 'Other desires/longings' },
				{ word: 'Jo koee lavai', meaning: 'Whoever brings' },
				{ word: 'Amit', meaning: 'Limitless / Boundless' },
				{ word: 'Jeevan phal', meaning: 'Fruit of life' }
			],
			context: 'Assures the devotee that Hanuman is not just for spiritual liberation but also for fulfilling the righteous desires of life, leading to ultimate satisfaction.',
			theme: 'Fulfillment of Desires'
		},
		{
			type: 'Chaupai',
			label: 'Verse 29',
			lines: [m.verse_29_1(), m.verse_29_2()],
			meaning: 'Your glory and splendor shine throughout the four ages and illuminate the entire world.',
			words: [
				{ word: 'Chaaron yug', meaning: 'The four ages' },
				{ word: 'Partap', meaning: 'Glory / Splendor' },
				{ word: 'Parsiddh', meaning: 'Famous / Renowned' },
				{ word: 'Jagat ujiyaara', meaning: 'World illumination' }
			],
			context: "Proclaims Hanuman's immortality (Chiranjeevi status). His power is not limited by time or era; it is a constant presence in the universe.",
			theme: 'Eternal Radiance'
		},
		{
			type: 'Chaupai',
			label: 'Verse 30',
			lines: [m.verse_30_1(), m.verse_30_2()],
			meaning: 'You are the protector of saints and the destroyer of evil forces, the beloved darling of Lord Rama.',
			words: [
				{ word: 'Sadhu Sant', meaning: 'Saints and Sages' },
				{ word: 'Rakhware', meaning: 'Guardian / Protector' },
				{ word: 'Asur nikandan', meaning: 'Destroyer of demons' },
				{ word: 'Ram dulaare', meaning: "Rama's beloved" }
			],
			context: "Defines Hanuman's role as the guardian of the righteous and the scourge of the wicked. His status as Rama's most beloved devotee is his ultimate identity.",
			theme: 'Guardian of Righteousness'
		},
		// --- Chaupais (31 to 35 Detailed) ---
		{
			type: 'Chaupai',
			label: 'Verse 31',
			lines: [m.verse_31_1(), m.verse_31_2()],
			meaning: 'You are the bestower of the eight supernatural powers and nine divine treasures; this boon was granted to you by Mother Sita.',
			words: [
				{ word: 'Ashta Siddhi', meaning: 'Eight supernatural powers' },
				{ word: 'Nau Nidhi', meaning: 'Nine divine treasures' },
				{ word: 'Ke Data', meaning: 'Giver / Bestower' },
				{ word: 'Janaki Mata', meaning: 'Mother Sita' }
			],
			context: 'Hanuman is the repository of all spiritual and material wealth. His authority to grant these to devotees is a direct gift from the Divine Mother.',
			theme: 'Bestower of Boons'
		},
		{
			type: 'Chaupai',
			label: 'Verse 32',
			lines: [m.verse_32_1(), m.verse_32_2()],
			meaning: "You possess the elixir of Rama's name; may you always remain the humble servant of the Lord of the Raghus.",
			words: [
				{ word: 'Ram Rasayan', meaning: "Rama's elixir / medicine" },
				{ word: 'Tumhare pasa', meaning: 'In your possession' },
				{ word: 'Sada raho', meaning: 'Always remain' },
				{ word: 'Raghupati ke dasa', meaning: 'Servant of Rama' }
			],
			context: 'Devotion is presented as a spiritual medicine (Rasayan) that heals the soul. Hanuman is the keeper of this nectar, yet he remains the ultimate example of humility.',
			theme: 'The Elixir of Devotion'
		},
		{
			type: 'Chaupai',
			label: 'Verse 33',
			lines: [m.verse_33_1(), m.verse_33_2()],
			meaning: 'By singing your praises, one reaches Rama and is released from the sufferings and cycles of many lifetimes.',
			words: [
				{ word: 'Tumhare bhajan', meaning: 'Your worship / chanting' },
				{ word: 'Ram ko paavai', meaning: 'Attains Lord Rama' },
				{ word: 'Janam janam', meaning: 'Life after life' },
				{ word: 'Dukh bisraavai', meaning: 'Erases all sorrows' }
			],
			context: 'Reaffirms that the path to God is through his most beloved devotee. Chanting Hanuman’s name resolves the karmic debts of countless past lives.',
			theme: 'Path to the Divine'
		},
		{
			type: 'Chaupai',
			label: 'Verse 34',
			lines: [m.verse_34_1(), m.verse_34_2()],
			meaning: 'At the moment of death, such a soul goes to the eternal abode of Rama, staying forever in the state of a Divine devotee.',
			words: [
				{ word: 'Anta kaal', meaning: 'End time / Death' },
				{ word: 'Raghubar pur', meaning: "Rama's divine city" },
				{ word: 'Hari-bhakta', meaning: 'Devotee of God' },
				{ word: 'Kahaaee', meaning: 'Is called / Known as' }
			],
			context: 'Guarantees spiritual safety. It promises that the devotee’s soul will never fall back into ignorance, ensuring an eternal connection with the Divine.',
			theme: 'Eternal Liberation'
		},
		{
			type: 'Chaupai',
			label: 'Verse 35',
			lines: [m.verse_35_1(), m.verse_35_2()],
			meaning: 'One need not contemplate any other deity; by serving Hanuman alone, one attains every form of happiness and peace.',
			words: [
				{ word: 'Aur devta', meaning: 'Other deities' },
				{ word: 'Chit na dharayi', meaning: 'Keep not in mind' },
				{ word: 'Hanumat sei', meaning: 'Serving Hanuman' },
				{ word: 'Sarva sukh', meaning: 'All happiness' }
			],
			context: "Reaffirms Hanuman's absolute sufficiency in this age (Kali Yuga). He is seen as the complete proxy for the Divine, capable of providing total fulfillment.",
			theme: 'Single-minded Devotion'
		},
		// --- Chaupais (36 to 40 Detailed) ---
		{
			type: 'Chaupai',
			label: 'Verse 36',
			lines: [m.verse_36_1(), m.verse_36_2()],
			meaning: 'All difficulties cease and all pain vanishes for those who remember and meditate upon the mighty hero, Hanuman.',
			words: [
				{ word: 'Sankat katai', meaning: 'Troubles are cut away' },
				{ word: 'Mite sab peera', meaning: 'All pain vanishes' },
				{ word: 'Jo sumirai', meaning: 'Whoever remembers' },
				{ word: 'Hanumat balbeera', meaning: 'Mighty hero Hanuman' }
			],
			context: "A powerful reassurance of Hanuman's role as the dispeller of obstacles. It emphasizes that constant remembrance is the key to mental and physical relief.",
			theme: 'Remover of Sorrows'
		},
		{
			type: 'Chaupai',
			label: 'Verse 37',
			lines: [m.verse_37_1(), m.verse_37_2()],
			meaning: 'Victory, victory, victory to Lord Hanuman! Please bestow your grace upon me in the manner of a supreme Divine Teacher.',
			words: [
				{ word: 'Jai Jai Jai', meaning: 'Victory, victory, victory' },
				{ word: 'Gosai', meaning: 'Lord / Master' },
				{ word: 'Kripa karahu', meaning: 'Bestow grace' },
				{ word: 'Gurudev ki nai', meaning: 'Like a divine teacher' }
			],
			context: 'Tulsidas elevates Hanuman to the status of a Guru. It is a humble plea for guidance, acknowledging that spiritual progress requires the grace of a master.',
			theme: 'The Divine Teacher'
		},
		{
			type: 'Chaupai',
			label: 'Verse 38',
			lines: [m.verse_38_1(), m.verse_38_2()],
			meaning: 'Whoever recites this prayer a hundred times is released from all bondages and attains supreme bliss.',
			words: [
				{ word: 'Sath bar', meaning: 'A hundred times' },
				{ word: 'Paath kar', meaning: 'Recites / Reads' },
				{ word: 'Chhutahi bandi', meaning: 'Released from bondage' },
				{ word: 'Maha sukh', meaning: 'Supreme bliss' }
			],
			context: 'Mentions the specific fruit of dedicated practice. Bondage refers to both physical constraints and the spiritual cycle of birth and death (Samsara).',
			theme: 'Liberation from Bondage'
		},
		{
			type: 'Chaupai',
			label: 'Verse 39',
			lines: [m.verse_39_1(), m.verse_39_2()],
			meaning: 'Whoever reads this Hanuman Chalisa attains spiritual perfection; Lord Shiva himself is the witness to this truth.',
			words: [
				{ word: 'Jo yeh padhai', meaning: 'Whoever reads this' },
				{ word: 'Siddhi', meaning: 'Spiritual perfection' },
				{ word: 'Saakhi', meaning: 'Witness' },
				{ word: 'Gaureesa', meaning: 'Lord Shiva' }
			],
			context: 'Provides a divine guarantee. Shiva, the ultimate yogi, validates that this hymn is a shortcut to spiritual accomplishment (Siddhi).',
			theme: 'Divine Validation'
		},
		{
			type: 'Chaupai',
			label: 'Verse 40',
			lines: [m.verse_40_1(), m.verse_40_2()],
			meaning: 'Tulsidas is forever the servant of the Lord. O Master, please make my heart your permanent abode.',
			words: [
				{ word: 'Tulsidas', meaning: 'The author' },
				{ word: 'Sada hari chera', meaning: 'Forever servant of God' },
				{ word: 'Keejae nath', meaning: 'Please do, O Lord' },
				{ word: 'Hrdaye mah dera', meaning: 'Abode in the heart' }
			],
			context: 'The final prayer of the author. It shifts the focus from external feats to internal presence, asking the Divine to dwell within the heart forever.',
			theme: 'The Eternal Resident'
		},

		// --- Concluding Doha ---
		{
			type: 'Doha',
			label: 'Concluding',
			lines: [m.concluding_doha_1(), m.concluding_doha_2(), m.concluding_doha_3(), m.concluding_doha_4()],
			meaning: 'O Son of the Wind, dispeller of misfortunes, the embodiment of auspiciousness — please dwell in my heart along with Lord Ram, Lakshman, and Mother Sita.',
			words: [
				{ word: 'Sankat haran', meaning: 'Remover of troubles' },
				{ word: 'Mangal murti', meaning: 'Form of auspiciousness' },
				{ word: 'Hrdaye', meaning: 'In the heart' },
				{ word: 'Basahu', meaning: 'Reside / Dwell' }
			],
			context: 'The final prayer asks Hanuman to stay eternally within the devotee\'s heart, bringing the entire Ram Durbar with him.',
			theme: 'Eternal presence'
		}
	]);

	function selectItem(index: number) {
		activeIndex = index;
		activeTab = 'meaning';
	}

	function handleKeyDown(event: KeyboardEvent, index: number) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			selectItem(index);
		}
	}
</script>

<main class="min-h-screen bg-base-100 font-sans text-base-content antialiased pb-24">
	<div class="mx-auto max-w-2xl px-4 py-8 md:py-16">
		<header class="mb-12 text-center">
			<p class="mb-2 text-xs font-bold tracking-[0.3em] text-primary uppercase">{m.learn()}</p>
			<h1 class="text-4xl font-black tracking-tighter md:text-6xl">{m.title()}</h1>
			<div class="divider mx-auto w-24 divider-primary opacity-20"></div>
			<p class="text-base-content/50 text-sm">{m.feature_learn_desc()}</p>
		</header>

		<div class="flex flex-col gap-4">
			{#each content as item, i (i)}
				<div
					role="button"
					tabindex="0"
					onclick={() => selectItem(i)}
					onkeydown={(e) => handleKeyDown(e, i)}
					class="group relative flex flex-col items-center py-8 transition-all duration-500 focus:outline-none 
					{activeIndex === i ? 'rounded-3xl bg-base-200 shadow-sm' : 'hover:bg-base-200/50 rounded-3xl cursor-pointer'}"
				>
					<div class="mb-4 flex items-center gap-2">
						<span
							class="badge font-mono badge-sm transition-all duration-300
							{activeIndex === i ? 'badge-primary' : 'badge-ghost opacity-30 group-hover:opacity-100'}"
						>
							{item.label}
						</span>
						<span
							class="text-[10px] font-black tracking-widest uppercase opacity-20 
							{activeIndex === i ? 'opacity-40' : ''}"
						>
							{item.type}
						</span>
					</div>

					<div class="max-w-md space-y-1 text-center text-lg leading-relaxed font-bold md:text-xl px-4">
						{#each item.lines as line, j (j)}
							<p>{line}</p>
						{/each}
					</div>

					{#if activeIndex === i}
						<div class="mt-8 w-full max-w-md px-4 text-left" role="presentation" onclick={(e) => e.stopPropagation()}>
							<div role="tablist" class="tabs tabs-box bg-base-300/30 mb-6 rounded-2xl p-1 gap-1">
								<button
									role="tab"
									aria-selected={activeTab === 'meaning'}
									class="tab flex-1 rounded-xl transition-all {activeTab === 'meaning' ? 'tab-active bg-base-100 shadow-sm' : ''}"
									onclick={() => (activeTab = 'meaning')}
								>
									Meaning
								</button>
								<button
									role="tab"
									aria-selected={activeTab === 'words'}
									class="tab flex-1 rounded-xl transition-all {activeTab === 'words' ? 'tab-active bg-base-100 shadow-sm' : ''}"
									onclick={() => (activeTab = 'words')}
								>
									Words
								</button>
								<button
									role="tab"
									aria-selected={activeTab === 'context'}
									class="tab rounded-xl flex-1 transition-all {activeTab === 'context' ? 'tab-active bg-base-100 shadow-sm' : ''}"
									onclick={() => (activeTab = 'context')}
								>
									Context
								</button>
							</div>

							{#if activeTab === 'meaning'}
								<div class="animate-in fade-in slide-in-from-bottom-2 duration-400">
									<p class="text-base-content/80 text-base leading-relaxed italic md:text-lg">
										{item.meaning}
									</p>
									<div class="divider opacity-10"></div>
									<div class="flex items-center gap-2 text-primary opacity-60">
										<i class="ph-duotone ph-sparkle"></i>
										<p class="text-[10px] font-black tracking-[0.2em] uppercase">
											{item.theme}
										</p>
									</div>
								</div>
							{/if}

							{#if activeTab === 'words'}
								<div class="animate-in fade-in slide-in-from-bottom-2 duration-400 space-y-3">
									{#each item.words as w, j (j)}
										<div class="flex items-baseline justify-between gap-4 py-2 border-b border-base-content/5 last:border-0">
											<span class="font-bold text-sm shrink-0 text-primary">{w.word}</span>
											<span class="text-base-content/60 text-sm text-right">{w.meaning}</span>
										</div>
									{/each}
								</div>
							{/if}

							{#if activeTab === 'context'}
								<div class="animate-in fade-in slide-in-from-bottom-2 duration-400">
									<p class="text-base-content/70 text-sm leading-relaxed border-l-4 border-accent/20 pl-4 py-1">
										{item.context}
									</p>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</main>