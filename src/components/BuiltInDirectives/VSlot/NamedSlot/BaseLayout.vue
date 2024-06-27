<template>
    <div>
        <header>
            <!-- 定义header插槽 -->
            <slot name="header">默认的头部内容</slot>
        </header>

        <main>
            <!-- 定义默认插槽 -->
            <slot>默认的主体内容</slot>
        </main>

        <footer>
            <!-- 定义footer插槽 -->
            <slot name="footer">默认的底部内容</slot>
        </footer>
    </div>
</template>
