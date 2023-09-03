import { redirect } from '@sveltejs/kit';
export async function load({ cookies }) {
    // Check if we have the account cookie, if we don't head to login
    if (cookies.get('account')) {
    throw redirect(302, '/login');
    }
  }


export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        const toEncode = `${username}:${password}`;
        const encoded = btoa(toEncode);
        cookies.set('account', encoded)
        throw redirect(303, '/');
    }
};