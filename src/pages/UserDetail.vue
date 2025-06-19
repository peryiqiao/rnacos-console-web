<template>
  <div class="detailWrap">
    <n-form ref="formRef" :model="model" :rules="rules">
      <n-form-item path="username" :label="$t('user.username')">
        <n-input
          :disabled="isKeyReadonly"
          :placeholder="$t('common.preInput') + $t('user.username')"
          v-model:value="model.username"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="nickname" :label="$t('user.nickname')">
        <n-input
          :disabled="isReadonly"
          :placeholder="$t('common.preInput') + $t('user.nickname')"
          v-model:value="model.nickname"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item
        v-if="!isKeyReadonly"
        path="password"
        :label="$t('user.password')"
      >
        <n-input
          type="password"
          :placeholder="$t('common.preInput') + $t('user.password')"
          v-model:value="model.password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item
        v-if="isKeyReadonly"
        path="updatePassword"
        :label="$t('user.resetPassword')"
      >
        <n-input
          type="password"
          :disabled="isReadonly"
          :placeholder="$t('common.preInput') + $t('user.password')"
          v-model:value="model.password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="roles" :label="$t('user.roles')">
        <n-select
          v-model:value="model.roles"
          :disabled="isReadonly"
          multiple
          :options="model.roleOptions"
        />
      </n-form-item>
      <n-form-item path="enabled" :label="$t('user.enable')">
        <n-switch :disabled="isReadonly" v-model:value="model.enable" />
      </n-form-item>
      <n-form-item
        path="namespaceWhitelist"
        :label="
          $t('menu.namespace') + $t('common.join') + $t('common.whitelist')
        "
      >
        <div class="privilege-group">
          <div class="is_all">
            <n-switch
              :disabled="isReadonly"
              v-model:value="model.namespacePrivilege.whitelistIsAll"
            >
              <template #checked>
                {{ $t('common.all') }}
              </template>
              <template #unchecked>
                {{ $t('common.part') }}
              </template>
            </n-switch>
          </div>
          <div v-if="!model.namespacePrivilege.whitelistIsAll" class="select">
            <n-select
              v-model:value="model.namespacePrivilege.whitelist"
              :disabled="isReadonly"
              multiple
              :options="namespaceOptions"
            />
          </div>
        </div>
      </n-form-item>
      <n-form-item
        path="namespaceBlacklist"
        :label="
          $t('menu.namespace') + $t('common.join') + $t('common.blacklist')
        "
      >
        <div class="privilege-group">
          <!--
          <div class="is_all">
            <n-switch
              :disabled="isReadonly"
              v-model:value="model.namespacePrivilege.blacklistIsAll"
            >
              <template #checked>
                {{ this.$t('common.all') }}
              </template>
              <template #unchecked>
                {{ this.$t('common.part') }}
              </template>
            </n-switch>
          </div>
          -->
          <div v-if="!model.namespacePrivilege.blacklistIsAll" class="select">
            <n-select
              v-model:value="model.namespacePrivilege.blacklist"
              :disabled="isReadonly"
              multiple
              :options="namespaceOptions"
            />
          </div>
        </div>
      </n-form-item>
    </n-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import * as constant from '@/types/constant';

export default defineComponent({
  props: ['model', 'namespaceOptions'],
  computed: {
    isReadonly() {
      return this.model.mode === constant.FORM_MODE_DETAIL;
    },
    isKeyReadonly() {
      return this.model.mode !== constant.FORM_MODE_CREATE;
    }
  },
  data() {
    const rules = {
      username: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error('需要输入用户名');
            }
            return true;
          },
          trigger: ['input', 'blur']
        }
      ],
      nickname: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error('需要输入用户昵称');
            }
            return true;
          },
          trigger: ['input', 'blur']
        }
      ],
      password: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error('需要输入用户密码');
            }
            return true;
          },
          trigger: ['blur']
        }
      ]
    };
    return {
      rules
    };
  }
});
</script>

<style scoped>
.detailWrap {
  background: #fff;
  padding: 3px;
  border-radius: 5px;
}
.privilege-group {
  display: block;
  position: relative;
  width: 100%;
}
.select {
  padding: 8px 0;
}
</style>
