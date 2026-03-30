pipeline {
  agent any

  stages {

    stage('Clone') {
      steps {
        git branch: 'main', url: 'https://github.com/your-repo.git'
      }
    }

    stage('Build') {
      steps {
        sh 'docker build -t todo-app .'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
        docker stop todo-app || true
        docker rm todo-app || true
        docker run -d -p 3000:3000 --name todo-app todo-app
        '''
      }
    }

  }
}
