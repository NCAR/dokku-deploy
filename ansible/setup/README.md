# Initial Server Setup on CentOS 7

This playbook will execute a initial server setup for CentOS 7 systems.

## Settings

- `create_user`: the name of the remote sudo user to create.
- `copy_local_key`: path to a local SSH public key that will be copied as authorized key for the new user. By default, it copies the key from the current system user running Ansible.
- `sys_packages`: array with list of packages that should be installed.

## Running this Playbook

Quick Steps:

### 1. Obtain the playbook

```shell
git clone https://github.com/NCAR/dokku-deploy.git
cd ansible/setup
```

### 2. Customize Options

```shell
nano vars/default.yml
```

```yml
#vars/default.yml
---
create_user: admin
copy_local_key: "{{ lookup('file', lookup('env','HOME') + '/.ssh/id_rsa.pub') }}"
sys_packages:
  - curl
  - vim
  - certbot
  - device-mapper-persistent-data
  - firewalld
  - git224
  - lvm2
  - nano
  - nginx
  - ufw
  - traceroute
  - yum-utils
  - docker-ce
  - docker-ce-cli
  - containerd.io
  - herokuish
  - dokku

GIT_MIN_VERSION: 2
DOCKER_COMPOSE_VERSION: 1.28.5
DOCKER_COMPOSE_BASEURL: https://github.com/docker/compose/releases/download/
```

### 3. Run the Playbook

```command
ansible-playbook -l [target] -i [inventory file] -u [remote user] playbook.yml
```
