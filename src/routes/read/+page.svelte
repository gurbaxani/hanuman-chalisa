<script>
	const verses = [
		['Jai Hanuman gyan gun sagar,', 'Jai Kapis tihun lok ujagar |'],
		['Ram doot atulit bal dhama,', 'Anjani-putra Pavan sut nama |'],
		['Mahavir Vikram Bajrangi,', 'Kumati nivar sumati Ke sangi |'],
		['Kanchan varan viraj subesa,', 'Kanan Kundal Kunchit Kesa |'],
		['Hath Vajra Aur Dhuvaje Viraje,', 'Kandhe moonj janehu sajai |'],
		['Sankar suvan kesri Nandan,', 'Tej pratap maha jag vandan |'],
		['Vidyavan guni ati chatur,', 'Ram kaj karibe ko aatur |'],
		['Prabu charitra sunibe ko rasiya,', 'Ram Lakhan Sita man Basiya |'],
		['Sukshma roop dhari Siyahi dikhava,', 'Vikat roop dhari lanka jarava |'],
		['Bhima roop dhari asur sanghare,', 'Ramachandra ke kaj sanvare |'],
		['Laye Sanjivan Lakhan Jiyaye,', 'Shri Raghuvir Harashi ur laye |'],
		['Raghupati Kinhi bahut badai,', 'Tum mam priye Bharat-hi sam bhai |'],
		['Sahas badan tumharo yash gaave,', 'Us kahi Shripati kanth lagaave |'],
		['Sankadik Brahmadi Muneesa,', 'Narad Sarad sahit Aheesa |'],
		['Yam Kuber Digpal Jahan te,', 'Kavi kovid kahi sake kahan te |'],
		['Tum upkar Sugreevahin keenha,', 'Ram milaye rajpad deenha |'],
		['Tumharo mantra Vibheeshan mana,', 'Lankeshwar Bhaye Sub jag jana |'],
		['Yug sahastra jojan par Bhanu,', 'Leelyo tahi madhur phal janu |'],
		['Prabhu mudrika meli mukh mahee,', 'Jaladhi langhi gaye achraj nahee |'],
		['Durgaam kaj jagat ke jete,', 'Sugam anugraha tumhre tete |'],
		['Ram dware tum rakhvare,', 'Hoat na agya binu paisare |'],
		['Sub sukh lahai tumhari sarna,', 'Tum rakshak kahu ko dar na |'],
		['Aapan tej samharo aapai,', 'Teenhon lok hank te kanpai |'],
		['Bhoot pisach Nikat nahin aavai,', 'Mahavir jab naam sunavai |'],
		['Nase rog harai sab peera,', 'Japat nirantar Hanumant beera |'],
		['Sankat se Hanuman chudavai,', 'Man Karam Vachan dyan jo lavai |'],
		['Sub par Ram tapasvee raja,', 'Tin ke kaj sakal Tum saja |'],
		['Aur manorath jo koi lavai,', 'Sohi amit jeevan phal pavai |'],
		['Charon Yug partap tumhara,', 'Hai persidh jagat ujiyara |'],
		['Sadhu Sant ke tum Rakhware,', 'Asur nikandan Ram dulhare |'],
		['Ashta sidhi nav nidhi ke dhata,', 'Us var deen Janki mata |'],
		['Ram rasayan tumhare pasa,', 'Sada raho Raghupati ke dasa |'],
		['Tumhare bhajan Ram ko pavai,', 'Janam janam ke dukh bisravai |'],
		['Anth kaal Raghuvir pur jayee,', 'Jahan janam Hari-Bakht Kahayee |'],
		['Aur Devta Chit na dharehi,', 'Hanumanth se hi sarve sukh karehi |'],
		['Sankat kate mite sab peera,', 'Jo sumirai Hanumat Balbeera |'],
		['Jai Jai Jai Hanuman Gosahin,', 'Kripa Karahu Gurudev ki nyahin |'],
		['Jo sat bar path kare kohi,', 'Chutehi bandhi maha sukh hohi |'],
		['Jo yah padhe Hanuman Chalisa,', 'Hoye siddhi sakhi Gaureesa |'],
		['Tulsidas sada hari chera,', 'Keejai Das Hrdaye mein dera |']
	];
</script>

<main class="min-h-screen bg-base-100 font-sans text-base-content antialiased">
	<div class="mx-auto max-w-2xl px-6 py-12 lg:py-24">
		<header class="mb-16 text-center lg:mb-24">
			<p class="mb-2 text-xs font-bold tracking-[0.3em] text-primary uppercase">Shree</p>
			<h1 class="text-5xl font-black tracking-tighter lg:text-7xl">Hanuman Chalisa</h1>
			<div class="divider mx-auto w-24 divider-primary opacity-20"></div>
		</header>

		<section class="card mb-20 bg-base-200 shadow-sm lg:mb-32">
			<div class="card-body items-center text-center">
				<h2 class="card-title text-xs font-bold tracking-widest uppercase opacity-50">
					Opening Doha
				</h2>
				<div class="space-y-6 text-xl leading-relaxed italic md:text-2xl">
					<div class="space-y-1">
						<p>Shri Guru Charan Saroj Raj,</p>
						<p>Nij mane mukure sudhar |</p>
						<p>Varnao Raghuvar Vimal Jasu,</p>
						<p>Jo dayaku phal char ||</p>
					</div>
					<div class="divider mx-auto w-12"></div>
					<div class="space-y-1">
						<p>Budhi Hin Tanu Janike,</p>
						<p>Sumirau Pavan Kumar |</p>
						<p>Bal budhi Vidya dehu mohe,</p>
						<p>Harahu Kalesa Vikar ||</p>
					</div>
				</div>
			</div>
		</section>

		<div class="flex flex-col gap-y-16 lg:gap-y-24">
			{#each verses as line, i}
				<div class="group flex flex-col items-center text-center">
					<span
						class="mb-4 badge badge-outline font-mono badge-sm opacity-30 transition-opacity group-hover:opacity-100"
					>
						{(i + 1).toString().padStart(2, '0')}
					</span>
					<div class="max-w-md space-y-1 text-lg leading-relaxed font-medium md:text-xl">
						<p>{line[0]}</p>
						<p>{line[1]}</p>
					</div>
				</div>
			{/each}
		</div>

		<footer class="card mt-32 bg-neutral text-neutral-content shadow-xl lg:mt-48">
			<div class="card-body items-center p-10 text-center">
				<h2 class="text-xs font-bold tracking-widest uppercase opacity-60">Concluding Doha</h2>
				<div class="mt-4 space-y-4 text-xl leading-relaxed font-bold italic md:text-2xl">
					<p>Pavantnai sankat haran,</p>
					<p>Mangal murti roop |</p>
					<p>Ram Lakhan Sita sahit,</p>
					<p>Hrdaye basahu sur bhoop ||</p>
				</div>
				<div class="mt-10 flex gap-2 opacity-30">
					<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
					<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
					<div class="h-1.5 w-1.5 rounded-full bg-current"></div>
				</div>
				<p class="mt-6 text-xs font-medium tracking-[0.4em] uppercase opacity-60">Jai Shri Ram</p>
			</div>
		</footer>
	</div>
</main>
