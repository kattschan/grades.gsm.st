import { redirect } from '@sveltejs/kit';
import { login } from 'studentvue.js'
export async function load({ cookies }) {
    // Check if we have the account cookie, if we don't head to login
    if (!cookies.get('account')) {
    throw redirect(302, '/login');
    }
    const decoded = atob(cookies.get('account'));
    const [username, password] = decoded.split(':');
    return {
        gradebook: JSON.parse(await gradebook(username, password))
      };
  }

  async function gradebook(username, password) {
    return login('https://ga-gcps-psv.edupoint.com', username, password).then(client => client.getGradebook());
  }
