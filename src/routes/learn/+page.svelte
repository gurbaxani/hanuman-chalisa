<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';

	let activeIndex: number | null = $state(0);
	let activeTab: 'meaning' | 'words' | 'context' = $state('meaning');

	const content = $derived([
		{
			type: m.learn_type_doha(),
			label: m.learn_label_opening(),
			lines: [m.opening_doha_1(), m.opening_doha_2(), m.opening_doha_3(), m.opening_doha_4()],
			meaning: m.learn_o1_m(),
			context: m.learn_o1_c(),
			theme: m.learn_o1_t(),
			words: [
				{ word: m.learn_o1_w0_w(), meaning: m.learn_o1_w0_m() },
				{ word: m.learn_o1_w1_w(), meaning: m.learn_o1_w1_m() },
				{ word: m.learn_o1_w2_w(), meaning: m.learn_o1_w2_m() },
				{ word: m.learn_o1_w3_w(), meaning: m.learn_o1_w3_m() },
				{ word: m.learn_o1_w4_w(), meaning: m.learn_o1_w4_m() },
			]
		},
		{
			type: m.learn_type_doha(),
			label: m.learn_label_opening(),
			lines: [m.opening_doha_5(), m.opening_doha_6(), m.opening_doha_7(), m.opening_doha_8()],
			meaning: m.learn_o2_m(),
			context: m.learn_o2_c(),
			theme: m.learn_o2_t(),
			words: [
				{ word: m.learn_o2_w0_w(), meaning: m.learn_o2_w0_m() },
				{ word: m.learn_o2_w1_w(), meaning: m.learn_o2_w1_m() },
				{ word: m.learn_o2_w2_w(), meaning: m.learn_o2_w2_m() },
				{ word: m.learn_o2_w3_w(), meaning: m.learn_o2_w3_m() },
				{ word: m.learn_o2_w4_w(), meaning: m.learn_o2_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 01",
			lines: [m.verse_1_1(), m.verse_1_2()],
			meaning: m.learn_v1_m(),
			context: m.learn_v1_c(),
			theme: m.learn_v1_t(),
			words: [
				{ word: m.learn_v1_w0_w(), meaning: m.learn_v1_w0_m() },
				{ word: m.learn_v1_w1_w(), meaning: m.learn_v1_w1_m() },
				{ word: m.learn_v1_w2_w(), meaning: m.learn_v1_w2_m() },
				{ word: m.learn_v1_w3_w(), meaning: m.learn_v1_w3_m() },
				{ word: m.learn_v1_w4_w(), meaning: m.learn_v1_w4_m() },
				{ word: m.learn_v1_w5_w(), meaning: m.learn_v1_w5_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 02",
			lines: [m.verse_2_1(), m.verse_2_2()],
			meaning: m.learn_v2_m(),
			context: m.learn_v2_c(),
			theme: m.learn_v2_t(),
			words: [
				{ word: m.learn_v2_w0_w(), meaning: m.learn_v2_w0_m() },
				{ word: m.learn_v2_w1_w(), meaning: m.learn_v2_w1_m() },
				{ word: m.learn_v2_w2_w(), meaning: m.learn_v2_w2_m() },
				{ word: m.learn_v2_w3_w(), meaning: m.learn_v2_w3_m() },
				{ word: m.learn_v2_w4_w(), meaning: m.learn_v2_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 03",
			lines: [m.verse_3_1(), m.verse_3_2()],
			meaning: m.learn_v3_m(),
			context: m.learn_v3_c(),
			theme: m.learn_v3_t(),
			words: [
				{ word: m.learn_v3_w0_w(), meaning: m.learn_v3_w0_m() },
				{ word: m.learn_v3_w1_w(), meaning: m.learn_v3_w1_m() },
				{ word: m.learn_v3_w2_w(), meaning: m.learn_v3_w2_m() },
				{ word: m.learn_v3_w3_w(), meaning: m.learn_v3_w3_m() },
				{ word: m.learn_v3_w4_w(), meaning: m.learn_v3_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 04",
			lines: [m.verse_4_1(), m.verse_4_2()],
			meaning: m.learn_v4_m(),
			context: m.learn_v4_c(),
			theme: m.learn_v4_t(),
			words: [
				{ word: m.learn_v4_w0_w(), meaning: m.learn_v4_w0_m() },
				{ word: m.learn_v4_w1_w(), meaning: m.learn_v4_w1_m() },
				{ word: m.learn_v4_w2_w(), meaning: m.learn_v4_w2_m() },
				{ word: m.learn_v4_w3_w(), meaning: m.learn_v4_w3_m() },
				{ word: m.learn_v4_w4_w(), meaning: m.learn_v4_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 05",
			lines: [m.verse_5_1(), m.verse_5_2()],
			meaning: m.learn_v5_m(),
			context: m.learn_v5_c(),
			theme: m.learn_v5_t(),
			words: [
				{ word: m.learn_v5_w0_w(), meaning: m.learn_v5_w0_m() },
				{ word: m.learn_v5_w1_w(), meaning: m.learn_v5_w1_m() },
				{ word: m.learn_v5_w2_w(), meaning: m.learn_v5_w2_m() },
				{ word: m.learn_v5_w3_w(), meaning: m.learn_v5_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 06",
			lines: [m.verse_6_1(), m.verse_6_2()],
			meaning: m.learn_v6_m(),
			context: m.learn_v6_c(),
			theme: m.learn_v6_t(),
			words: [
				{ word: m.learn_v6_w0_w(), meaning: m.learn_v6_w0_m() },
				{ word: m.learn_v6_w1_w(), meaning: m.learn_v6_w1_m() },
				{ word: m.learn_v6_w2_w(), meaning: m.learn_v6_w2_m() },
				{ word: m.learn_v6_w3_w(), meaning: m.learn_v6_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 07",
			lines: [m.verse_7_1(), m.verse_7_2()],
			meaning: m.learn_v7_m(),
			context: m.learn_v7_c(),
			theme: m.learn_v7_t(),
			words: [
				{ word: m.learn_v7_w0_w(), meaning: m.learn_v7_w0_m() },
				{ word: m.learn_v7_w1_w(), meaning: m.learn_v7_w1_m() },
				{ word: m.learn_v7_w2_w(), meaning: m.learn_v7_w2_m() },
				{ word: m.learn_v7_w3_w(), meaning: m.learn_v7_w3_m() },
				{ word: m.learn_v7_w4_w(), meaning: m.learn_v7_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 08",
			lines: [m.verse_8_1(), m.verse_8_2()],
			meaning: m.learn_v8_m(),
			context: m.learn_v8_c(),
			theme: m.learn_v8_t(),
			words: [
				{ word: m.learn_v8_w0_w(), meaning: m.learn_v8_w0_m() },
				{ word: m.learn_v8_w1_w(), meaning: m.learn_v8_w1_m() },
				{ word: m.learn_v8_w2_w(), meaning: m.learn_v8_w2_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 09",
			lines: [m.verse_9_1(), m.verse_9_2()],
			meaning: m.learn_v9_m(),
			context: m.learn_v9_c(),
			theme: m.learn_v9_t(),
			words: [
				{ word: m.learn_v9_w0_w(), meaning: m.learn_v9_w0_m() },
				{ word: m.learn_v9_w1_w(), meaning: m.learn_v9_w1_m() },
				{ word: m.learn_v9_w2_w(), meaning: m.learn_v9_w2_m() },
				{ word: m.learn_v9_w3_w(), meaning: m.learn_v9_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 10",
			lines: [m.verse_10_1(), m.verse_10_2()],
			meaning: m.learn_v10_m(),
			context: m.learn_v10_c(),
			theme: m.learn_v10_t(),
			words: [
				{ word: m.learn_v10_w0_w(), meaning: m.learn_v10_w0_m() },
				{ word: m.learn_v10_w1_w(), meaning: m.learn_v10_w1_m() },
				{ word: m.learn_v10_w2_w(), meaning: m.learn_v10_w2_m() },
				{ word: m.learn_v10_w3_w(), meaning: m.learn_v10_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 11",
			lines: [m.verse_11_1(), m.verse_11_2()],
			meaning: m.learn_v11_m(),
			context: m.learn_v11_c(),
			theme: m.learn_v11_t(),
			words: [
				{ word: m.learn_v11_w0_w(), meaning: m.learn_v11_w0_m() },
				{ word: m.learn_v11_w1_w(), meaning: m.learn_v11_w1_m() },
				{ word: m.learn_v11_w2_w(), meaning: m.learn_v11_w2_m() },
				{ word: m.learn_v11_w3_w(), meaning: m.learn_v11_w3_m() },
				{ word: m.learn_v11_w4_w(), meaning: m.learn_v11_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 12",
			lines: [m.verse_12_1(), m.verse_12_2()],
			meaning: m.learn_v12_m(),
			context: m.learn_v12_c(),
			theme: m.learn_v12_t(),
			words: [
				{ word: m.learn_v12_w0_w(), meaning: m.learn_v12_w0_m() },
				{ word: m.learn_v12_w1_w(), meaning: m.learn_v12_w1_m() },
				{ word: m.learn_v12_w2_w(), meaning: m.learn_v12_w2_m() },
				{ word: m.learn_v12_w3_w(), meaning: m.learn_v12_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 13",
			lines: [m.verse_13_1(), m.verse_13_2()],
			meaning: m.learn_v13_m(),
			context: m.learn_v13_c(),
			theme: m.learn_v13_t(),
			words: [
				{ word: m.learn_v13_w0_w(), meaning: m.learn_v13_w0_m() },
				{ word: m.learn_v13_w1_w(), meaning: m.learn_v13_w1_m() },
				{ word: m.learn_v13_w2_w(), meaning: m.learn_v13_w2_m() },
				{ word: m.learn_v13_w3_w(), meaning: m.learn_v13_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 14",
			lines: [m.verse_14_1(), m.verse_14_2()],
			meaning: m.learn_v14_m(),
			context: m.learn_v14_c(),
			theme: m.learn_v14_t(),
			words: [
				{ word: m.learn_v14_w0_w(), meaning: m.learn_v14_w0_m() },
				{ word: m.learn_v14_w1_w(), meaning: m.learn_v14_w1_m() },
				{ word: m.learn_v14_w2_w(), meaning: m.learn_v14_w2_m() },
				{ word: m.learn_v14_w3_w(), meaning: m.learn_v14_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 15",
			lines: [m.verse_15_1(), m.verse_15_2()],
			meaning: m.learn_v15_m(),
			context: m.learn_v15_c(),
			theme: m.learn_v15_t(),
			words: [
				{ word: m.learn_v15_w0_w(), meaning: m.learn_v15_w0_m() },
				{ word: m.learn_v15_w1_w(), meaning: m.learn_v15_w1_m() },
				{ word: m.learn_v15_w2_w(), meaning: m.learn_v15_w2_m() },
				{ word: m.learn_v15_w3_w(), meaning: m.learn_v15_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 16",
			lines: [m.verse_16_1(), m.verse_16_2()],
			meaning: m.learn_v16_m(),
			context: m.learn_v16_c(),
			theme: m.learn_v16_t(),
			words: [
				{ word: m.learn_v16_w0_w(), meaning: m.learn_v16_w0_m() },
				{ word: m.learn_v16_w1_w(), meaning: m.learn_v16_w1_m() },
				{ word: m.learn_v16_w2_w(), meaning: m.learn_v16_w2_m() },
				{ word: m.learn_v16_w3_w(), meaning: m.learn_v16_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 17",
			lines: [m.verse_17_1(), m.verse_17_2()],
			meaning: m.learn_v17_m(),
			context: m.learn_v17_c(),
			theme: m.learn_v17_t(),
			words: [
				{ word: m.learn_v17_w0_w(), meaning: m.learn_v17_w0_m() },
				{ word: m.learn_v17_w1_w(), meaning: m.learn_v17_w1_m() },
				{ word: m.learn_v17_w2_w(), meaning: m.learn_v17_w2_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 18",
			lines: [m.verse_18_1(), m.verse_18_2()],
			meaning: m.learn_v18_m(),
			context: m.learn_v18_c(),
			theme: m.learn_v18_t(),
			words: [
				{ word: m.learn_v18_w0_w(), meaning: m.learn_v18_w0_m() },
				{ word: m.learn_v18_w1_w(), meaning: m.learn_v18_w1_m() },
				{ word: m.learn_v18_w2_w(), meaning: m.learn_v18_w2_m() },
				{ word: m.learn_v18_w3_w(), meaning: m.learn_v18_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 19",
			lines: [m.verse_19_1(), m.verse_19_2()],
			meaning: m.learn_v19_m(),
			context: m.learn_v19_c(),
			theme: m.learn_v19_t(),
			words: [
				{ word: m.learn_v19_w0_w(), meaning: m.learn_v19_w0_m() },
				{ word: m.learn_v19_w1_w(), meaning: m.learn_v19_w1_m() },
				{ word: m.learn_v19_w2_w(), meaning: m.learn_v19_w2_m() },
				{ word: m.learn_v19_w3_w(), meaning: m.learn_v19_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 20",
			lines: [m.verse_20_1(), m.verse_20_2()],
			meaning: m.learn_v20_m(),
			context: m.learn_v20_c(),
			theme: m.learn_v20_t(),
			words: [
				{ word: m.learn_v20_w0_w(), meaning: m.learn_v20_w0_m() },
				{ word: m.learn_v20_w1_w(), meaning: m.learn_v20_w1_m() },
				{ word: m.learn_v20_w2_w(), meaning: m.learn_v20_w2_m() },
				{ word: m.learn_v20_w3_w(), meaning: m.learn_v20_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 21",
			lines: [m.verse_21_1(), m.verse_21_2()],
			meaning: m.learn_v21_m(),
			context: m.learn_v21_c(),
			theme: m.learn_v21_t(),
			words: [
				{ word: m.learn_v21_w0_w(), meaning: m.learn_v21_w0_m() },
				{ word: m.learn_v21_w1_w(), meaning: m.learn_v21_w1_m() },
				{ word: m.learn_v21_w2_w(), meaning: m.learn_v21_w2_m() },
				{ word: m.learn_v21_w3_w(), meaning: m.learn_v21_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 22",
			lines: [m.verse_22_1(), m.verse_22_2()],
			meaning: m.learn_v22_m(),
			context: m.learn_v22_c(),
			theme: m.learn_v22_t(),
			words: [
				{ word: m.learn_v22_w0_w(), meaning: m.learn_v22_w0_m() },
				{ word: m.learn_v22_w1_w(), meaning: m.learn_v22_w1_m() },
				{ word: m.learn_v22_w2_w(), meaning: m.learn_v22_w2_m() },
				{ word: m.learn_v22_w3_w(), meaning: m.learn_v22_w3_m() },
				{ word: m.learn_v22_w4_w(), meaning: m.learn_v22_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 23",
			lines: [m.verse_23_1(), m.verse_23_2()],
			meaning: m.learn_v23_m(),
			context: m.learn_v23_c(),
			theme: m.learn_v23_t(),
			words: [
				{ word: m.learn_v23_w0_w(), meaning: m.learn_v23_w0_m() },
				{ word: m.learn_v23_w1_w(), meaning: m.learn_v23_w1_m() },
				{ word: m.learn_v23_w2_w(), meaning: m.learn_v23_w2_m() },
				{ word: m.learn_v23_w3_w(), meaning: m.learn_v23_w3_m() },
				{ word: m.learn_v23_w4_w(), meaning: m.learn_v23_w4_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 24",
			lines: [m.verse_24_1(), m.verse_24_2()],
			meaning: m.learn_v24_m(),
			context: m.learn_v24_c(),
			theme: m.learn_v24_t(),
			words: [
				{ word: m.learn_v24_w0_w(), meaning: m.learn_v24_w0_m() },
				{ word: m.learn_v24_w1_w(), meaning: m.learn_v24_w1_m() },
				{ word: m.learn_v24_w2_w(), meaning: m.learn_v24_w2_m() },
				{ word: m.learn_v24_w3_w(), meaning: m.learn_v24_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 25",
			lines: [m.verse_25_1(), m.verse_25_2()],
			meaning: m.learn_v25_m(),
			context: m.learn_v25_c(),
			theme: m.learn_v25_t(),
			words: [
				{ word: m.learn_v25_w0_w(), meaning: m.learn_v25_w0_m() },
				{ word: m.learn_v25_w1_w(), meaning: m.learn_v25_w1_m() },
				{ word: m.learn_v25_w2_w(), meaning: m.learn_v25_w2_m() },
				{ word: m.learn_v25_w3_w(), meaning: m.learn_v25_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 26",
			lines: [m.verse_26_1(), m.verse_26_2()],
			meaning: m.learn_v26_m(),
			context: m.learn_v26_c(),
			theme: m.learn_v26_t(),
			words: [
				{ word: m.learn_v26_w0_w(), meaning: m.learn_v26_w0_m() },
				{ word: m.learn_v26_w1_w(), meaning: m.learn_v26_w1_m() },
				{ word: m.learn_v26_w2_w(), meaning: m.learn_v26_w2_m() },
				{ word: m.learn_v26_w3_w(), meaning: m.learn_v26_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 27",
			lines: [m.verse_27_1(), m.verse_27_2()],
			meaning: m.learn_v27_m(),
			context: m.learn_v27_c(),
			theme: m.learn_v27_t(),
			words: [
				{ word: m.learn_v27_w0_w(), meaning: m.learn_v27_w0_m() },
				{ word: m.learn_v27_w1_w(), meaning: m.learn_v27_w1_m() },
				{ word: m.learn_v27_w2_w(), meaning: m.learn_v27_w2_m() },
				{ word: m.learn_v27_w3_w(), meaning: m.learn_v27_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 28",
			lines: [m.verse_28_1(), m.verse_28_2()],
			meaning: m.learn_v28_m(),
			context: m.learn_v28_c(),
			theme: m.learn_v28_t(),
			words: [
				{ word: m.learn_v28_w0_w(), meaning: m.learn_v28_w0_m() },
				{ word: m.learn_v28_w1_w(), meaning: m.learn_v28_w1_m() },
				{ word: m.learn_v28_w2_w(), meaning: m.learn_v28_w2_m() },
				{ word: m.learn_v28_w3_w(), meaning: m.learn_v28_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 29",
			lines: [m.verse_29_1(), m.verse_29_2()],
			meaning: m.learn_v29_m(),
			context: m.learn_v29_c(),
			theme: m.learn_v29_t(),
			words: [
				{ word: m.learn_v29_w0_w(), meaning: m.learn_v29_w0_m() },
				{ word: m.learn_v29_w1_w(), meaning: m.learn_v29_w1_m() },
				{ word: m.learn_v29_w2_w(), meaning: m.learn_v29_w2_m() },
				{ word: m.learn_v29_w3_w(), meaning: m.learn_v29_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 30",
			lines: [m.verse_30_1(), m.verse_30_2()],
			meaning: m.learn_v30_m(),
			context: m.learn_v30_c(),
			theme: m.learn_v30_t(),
			words: [
				{ word: m.learn_v30_w0_w(), meaning: m.learn_v30_w0_m() },
				{ word: m.learn_v30_w1_w(), meaning: m.learn_v30_w1_m() },
				{ word: m.learn_v30_w2_w(), meaning: m.learn_v30_w2_m() },
				{ word: m.learn_v30_w3_w(), meaning: m.learn_v30_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 31",
			lines: [m.verse_31_1(), m.verse_31_2()],
			meaning: m.learn_v31_m(),
			context: m.learn_v31_c(),
			theme: m.learn_v31_t(),
			words: [
				{ word: m.learn_v31_w0_w(), meaning: m.learn_v31_w0_m() },
				{ word: m.learn_v31_w1_w(), meaning: m.learn_v31_w1_m() },
				{ word: m.learn_v31_w2_w(), meaning: m.learn_v31_w2_m() },
				{ word: m.learn_v31_w3_w(), meaning: m.learn_v31_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 32",
			lines: [m.verse_32_1(), m.verse_32_2()],
			meaning: m.learn_v32_m(),
			context: m.learn_v32_c(),
			theme: m.learn_v32_t(),
			words: [
				{ word: m.learn_v32_w0_w(), meaning: m.learn_v32_w0_m() },
				{ word: m.learn_v32_w1_w(), meaning: m.learn_v32_w1_m() },
				{ word: m.learn_v32_w2_w(), meaning: m.learn_v32_w2_m() },
				{ word: m.learn_v32_w3_w(), meaning: m.learn_v32_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 33",
			lines: [m.verse_33_1(), m.verse_33_2()],
			meaning: m.learn_v33_m(),
			context: m.learn_v33_c(),
			theme: m.learn_v33_t(),
			words: [
				{ word: m.learn_v33_w0_w(), meaning: m.learn_v33_w0_m() },
				{ word: m.learn_v33_w1_w(), meaning: m.learn_v33_w1_m() },
				{ word: m.learn_v33_w2_w(), meaning: m.learn_v33_w2_m() },
				{ word: m.learn_v33_w3_w(), meaning: m.learn_v33_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 34",
			lines: [m.verse_34_1(), m.verse_34_2()],
			meaning: m.learn_v34_m(),
			context: m.learn_v34_c(),
			theme: m.learn_v34_t(),
			words: [
				{ word: m.learn_v34_w0_w(), meaning: m.learn_v34_w0_m() },
				{ word: m.learn_v34_w1_w(), meaning: m.learn_v34_w1_m() },
				{ word: m.learn_v34_w2_w(), meaning: m.learn_v34_w2_m() },
				{ word: m.learn_v34_w3_w(), meaning: m.learn_v34_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 35",
			lines: [m.verse_35_1(), m.verse_35_2()],
			meaning: m.learn_v35_m(),
			context: m.learn_v35_c(),
			theme: m.learn_v35_t(),
			words: [
				{ word: m.learn_v35_w0_w(), meaning: m.learn_v35_w0_m() },
				{ word: m.learn_v35_w1_w(), meaning: m.learn_v35_w1_m() },
				{ word: m.learn_v35_w2_w(), meaning: m.learn_v35_w2_m() },
				{ word: m.learn_v35_w3_w(), meaning: m.learn_v35_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 36",
			lines: [m.verse_36_1(), m.verse_36_2()],
			meaning: m.learn_v36_m(),
			context: m.learn_v36_c(),
			theme: m.learn_v36_t(),
			words: [
				{ word: m.learn_v36_w0_w(), meaning: m.learn_v36_w0_m() },
				{ word: m.learn_v36_w1_w(), meaning: m.learn_v36_w1_m() },
				{ word: m.learn_v36_w2_w(), meaning: m.learn_v36_w2_m() },
				{ word: m.learn_v36_w3_w(), meaning: m.learn_v36_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 37",
			lines: [m.verse_37_1(), m.verse_37_2()],
			meaning: m.learn_v37_m(),
			context: m.learn_v37_c(),
			theme: m.learn_v37_t(),
			words: [
				{ word: m.learn_v37_w0_w(), meaning: m.learn_v37_w0_m() },
				{ word: m.learn_v37_w1_w(), meaning: m.learn_v37_w1_m() },
				{ word: m.learn_v37_w2_w(), meaning: m.learn_v37_w2_m() },
				{ word: m.learn_v37_w3_w(), meaning: m.learn_v37_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 38",
			lines: [m.verse_38_1(), m.verse_38_2()],
			meaning: m.learn_v38_m(),
			context: m.learn_v38_c(),
			theme: m.learn_v38_t(),
			words: [
				{ word: m.learn_v38_w0_w(), meaning: m.learn_v38_w0_m() },
				{ word: m.learn_v38_w1_w(), meaning: m.learn_v38_w1_m() },
				{ word: m.learn_v38_w2_w(), meaning: m.learn_v38_w2_m() },
				{ word: m.learn_v38_w3_w(), meaning: m.learn_v38_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 39",
			lines: [m.verse_39_1(), m.verse_39_2()],
			meaning: m.learn_v39_m(),
			context: m.learn_v39_c(),
			theme: m.learn_v39_t(),
			words: [
				{ word: m.learn_v39_w0_w(), meaning: m.learn_v39_w0_m() },
				{ word: m.learn_v39_w1_w(), meaning: m.learn_v39_w1_m() },
				{ word: m.learn_v39_w2_w(), meaning: m.learn_v39_w2_m() },
				{ word: m.learn_v39_w3_w(), meaning: m.learn_v39_w3_m() },
			]
		},
		{
			type: m.learn_type_chaupai(),
			label: m.learn_label_verse() + " 40",
			lines: [m.verse_40_1(), m.verse_40_2()],
			meaning: m.learn_v40_m(),
			context: m.learn_v40_c(),
			theme: m.learn_v40_t(),
			words: [
				{ word: m.learn_v40_w0_w(), meaning: m.learn_v40_w0_m() },
				{ word: m.learn_v40_w1_w(), meaning: m.learn_v40_w1_m() },
				{ word: m.learn_v40_w2_w(), meaning: m.learn_v40_w2_m() },
				{ word: m.learn_v40_w3_w(), meaning: m.learn_v40_w3_m() },
			]
		},
		{
			type: m.learn_type_doha(),
			label: m.learn_label_concluding(),
			lines: [m.concluding_doha_1(), m.concluding_doha_2(), m.concluding_doha_3(), m.concluding_doha_4()],
			meaning: m.learn_c1_m(),
			context: m.learn_c1_c(),
			theme: m.learn_c1_t(),
			words: [
				{ word: m.learn_c1_w0_w(), meaning: m.learn_c1_w0_m() },
				{ word: m.learn_c1_w1_w(), meaning: m.learn_c1_w1_m() },
				{ word: m.learn_c1_w2_w(), meaning: m.learn_c1_w2_m() },
				{ word: m.learn_c1_w3_w(), meaning: m.learn_c1_w3_m() },
			]
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
							class="badge badge-sm transition-all duration-300
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
									{m.meaning()}
								</button>
								<button
									role="tab"
									aria-selected={activeTab === 'words'}
									class="tab flex-1 rounded-xl transition-all {activeTab === 'words' ? 'tab-active bg-base-100 shadow-sm' : ''}"
									onclick={() => (activeTab = 'words')}
								>
									{m.words()}
								</button>
								<button
									role="tab"
									aria-selected={activeTab === 'context'}
									class="tab rounded-xl flex-1 transition-all {activeTab === 'context' ? 'tab-active bg-base-100 shadow-sm' : ''}"
									onclick={() => (activeTab = 'context')}
								>
									{m.context()}
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

		<footer class="mt-24 text-center px-6 pb-12 border-t border-base-content/5 pt-12">
			<div class="flex flex-col items-center gap-4 max-w-md mx-auto">
				<div class="w-12 h-12 rounded-2xl bg-base-200 flex items-center justify-center text-base-content/30">
					<i class="ph-duotone ph-info text-2xl"></i>
				</div>
				<p class="text-sm opacity-60 leading-relaxed font-medium">
					{m.ai_disclaimer_learn()}
				</p>
			</div>
		</footer>
	</div>
</main>