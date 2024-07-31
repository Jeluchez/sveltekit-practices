export async function load({ cookies }) {
	const user= {
        name: 'jose Luis',
        type: 'admin',
		spouse:null,
    }
	return { user };
}

/** @type {import('./$types').Actions} */
export const actions = {
	update: async ({ request }) => {
		const data = await request.formData();
		const res = await getData(2000) 
		return { success:true}
	},
};

function getData(duration:number) {
	return new Promise((resolve) => {
	  setTimeout(resolve, duration);
	});
  }