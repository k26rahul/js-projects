from flask import Flask
from flask_login import LoginManager
from routes import bp


def create_app():
  app = Flask(__name__)
  app.config['SECRET_KEY'] = '12345'

  login_manager = LoginManager()
  login_manager.init_app(app)

  @login_manager.user_loader
  def load_user(user_id):
    ...

  app.register_blueprint(bp)
  return app


if __name__ == '__main__':
  app = create_app()
  app.run(debug=True)
