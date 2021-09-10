# isshin
ToDoリストサービスです。
学習用のプロジェクトです。初めて0から作るプロジェクトです。

## インフラ構築手順

本アプリケーションのインフラを構築する手順を記します。

1. GCPプロジェクトを作成します。
1. Terraform CICDユーザを作成します。
1. GitHub リポジトリにTerraform-CICDサービスアカウントのキーを設定する。
    1. TERRAFORM_CICD_CREDENTIALS
    1. PROJECT_ID
    1. TFSTATE_BUCKET
1. tfstateを格納するためのバケットを作成する。
1. `gcloud services enable cloudresourcemanager.googleapis.com`を実行します。

## アプリケーションローカル起動手順

1. 起動：`docker compose up -d --build`
1. 接続：`docker compose exec python3 bash`
1. 停止：`docker compose down`

1. FastAPI起動：`uvicorn main:app --reload`