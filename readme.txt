1.Fork it locally.
2.Go to server and run npm install
3.Go to client and run npm install
4.Check engines in package.json inside server to verify whether your node version matches it.
5.create .gitignore inside both server and client
and write node_modules inside each of them.
Refer internet for gitignore templates for react and node.

6.(Optional)To connect database create .env file inside server as follows:
MONGO_URL= YOUR MONGO URL

7.Do not push anything to remote main.
