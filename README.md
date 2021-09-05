# isshin
ToDoリストサービスです。
学習用のプロジェクトです。初めて0から作るプロジェクトです。

## 動作手順

本アプリケーションを動作させる手順を記します。

1. GCPプロジェクトを作成します。
1. Terraform CICDユーザを作成します。
1. GitHub リポジトリにTerraform-CICDサービスアカウントのキーを設定する。
    1. TERRAFORM_CICD_CREDENTIALS
    1. PROJECT_ID
    1. TFSTATE_BUCKET
1. tfstateを格納するためのバケットを作成する。
1. `gcloud services enable cloudresourcemanager.googleapis.com`を実行します。
