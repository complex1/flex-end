<template>
  <div class="popover" ref="popover">
    <div class="popover-trigger" ref="trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="popover-content" :class="{
      'popover-content--default-background': defaultBackground,
      'popover-content--top': placement === 'top',
      'popover-content--bottom': placement === 'bottom',
      'popover-content--left': placement === 'left',
      'popover-content--right': placement === 'right',
      'popover-content--top-left': placement === 'top-left',
      'popover-content--top-right': placement === 'top-right',
      'popover-content--bottom-left': placement === 'bottom-left',
      'popover-content--bottom-right': placement === 'bottom-right',
      'popover-content--left-top': placement === 'left-top',
      'popover-content--left-bottom': placement === 'left-bottom',
      'popover-content--right-top': placement === 'right-top',
      'popover-content--right-bottom': placement === 'right-bottom',
    }" ref="content">
      <div :class="`popover-content__notch ${placement}`" :style="{
        left: notchLeft + 'px',
        top: notchTop + 'px',

      }"></div>
      <slot name="content" v-if="show"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trigger: {
      type: String,
      default: "click",
    },
    placement: {
      type: String,
      default: "top",
    },
    defaultBackground: {
      type: Boolean,
      default: true,
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: false,
      contentObserver: null,
      notchLeft: 0,
      notchTop: 0
    };
  },
  watch: {
    show(val) {
      this.$emit("update:show", val);
    },
    placement() {
      this.setPosition();
    }
  },
  methods: {
    setPosition() {
      console.log("setPosition");
      const triggerRect = this.$refs.trigger.getBoundingClientRect();
      const popoverRect = this.$refs.content.getBoundingClientRect();
      let top = 0,
        left = 0;
      let notchLeft = 0,
        notchTop = 0;
      const gap = 10;
      if (this.placement === "bottom") {
        top = triggerRect.top + triggerRect.height + gap;
        left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        notchLeft = popoverRect.width / 2 - gap;
        notchTop = -gap*2;
      } else if (this.placement === "top") {
        top = triggerRect.top - popoverRect.height - gap;
        left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        notchLeft = popoverRect.width / 2 - 10;
        notchTop = popoverRect.height;
      } else if (this.placement === "left") {
        top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.left - popoverRect.width - gap;
        notchLeft = popoverRect.width;
        notchTop = popoverRect.height / 2 - gap;
      } else if (this.placement === "right") {
        top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.left + triggerRect.width + gap;
        notchLeft = -gap*2;
        notchTop = popoverRect.height / 2 - gap;
      }

      if (top < 0) {
        top = 0;
      } if (left < 0) {
        left = 0;
      } if (top + popoverRect.height > window.innerHeight) {
        top = window.innerHeight - popoverRect.height;
      } if (left + popoverRect.width > window.innerWidth) {
        left = window.innerWidth - popoverRect.width;
      }

      this.$refs.content.style.top = `${top}px`;
      this.$refs.content.style.left = `${left}px`;
      this.notchLeft = notchLeft;
      this.notchTop = notchTop;
    },
    openPopover() {
      this.show = true;
      // append to body
      document.body.appendChild(this.$refs.content);
      // set position
      this.setPosition();
      // set visibility
      this.$refs.content.style.visibility = "visible";
    },
    closePopover() {
      this.show = false;
      // remove from body
      document.body.removeChild(this.$refs.content);
      // set visibility
      this.$refs.content.style.visibility = "hidden";
    },
    togglePopover() {
      if (this.show) {
        this.closePopover();
      } else {
        this.openPopover();
      }
    },
    clickOutside (e) {
      if (this.show && !(this.$refs?.content?.contains(e.target) || this.$refs?.trigger?.contains(e.target))) {
        this.closePopover();
      }
    }
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.trigger.addEventListener("click", this.togglePopover);
    } else if (this.trigger === "hover") {
      this.$refs.trigger.addEventListener("mouseenter", this.openPopover);
      this.$refs.trigger.addEventListener("mouseleave", this.closePopover);
    }
    this.contentObserver = new MutationObserver(this.setPosition);
    this.contentObserver.observe(this.$refs.content, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    });
    if (this.closeOnClickOutside) {
      document.addEventListener("click", this.clickOutside);
    }
  },
  beforeDestroy() {
    this.$refs?.content?.remove();
    if (this.trigger === "click") {
      this.$refs.trigger.removeEventListener("click", this.togglePopover);
    } else if (this.trigger === "hover") {
      this.$refs.trigger.removeEventListener("mouseenter", this.openPopover);
      this.$refs.trigger.removeEventListener("mouseleave", this.closePopover);
    }
    this.contentObserver.disconnect();
    if (this.closeOnClickOutside) {
      document.removeEventListener("click", this.clickOutside);
    }
  },
};
</script>

<style lang="scss" scoped >
.popover {
  &-trigger {
    display: inline-block;
  }
  &-content {
    position: fixed;
    visibility: hidden;
    z-index: 1000;
    &__notch {
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-color: transparent;
      border-width: 10px;
      &.top {
        border-top-color: var(--c-10);
      }
      &.bottom {
        border-bottom-color: var(--c-10);
      }
      &.left {
        border-left-color: var(--c-10);
      }
      &.right {
        border-right-color: var(--c-10);
      }
    }
  }
  &-content--default-background {
    background-color: var(--c-10);
    padding: 8px;
    border-radius: 4px;
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));
  }
}
</style>